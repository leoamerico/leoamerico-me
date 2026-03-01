# Plano: Guardrails de Qualidade para leoamerico-me

## Problema

O repositório não possui nenhuma camada de validação automatizada.
Tokens CSS perigosos (`--slate` com ratio 4.1:1), falhas de semântica HTML
(`<span>` em vez de `<h2>` para seções) e redundâncias SVG podem ser
introduzidos sem que ninguém perceba. Hoje, só uma auditoria manual detecta.

## Objetivo

Impedir que problemas de contraste WCAG, semântica HTML e integridade de
design tokens cheguem a produção — com automação leve, sem over-engineering.

---

## Etapas

### 1. Corrigir os achados existentes (page.tsx + globals.css)

- **H-1** — Elevar `--slate` de `#6B7280` para `#8B95A5` (ratio ≥ 4.5:1
  contra `--ink`), tornando o token seguro para texto normal.
- **M-1** — Documentar via comentário CSS que `--envlive` é AA-only; para
  AAA, usar `--envlive-light: #60A5FA`.
- **M-2** — Trocar `<span className="label">` por `<h2 className="label">`
  nas 6 seções da page.tsx para navegação assistiva.

### 2. Criar `CLAUDE.md` na raiz

Arquivo de diretrizes para qualquer agente ou desenvolvedor:

```
# CLAUDE.md — leoamerico-me

## Regras de Design Tokens
- Todo token de cor para texto DEVE ter ratio >= 4.5:1 contra --ink (#0A0A0F).
- Tokens decorativos (bordas, sombras) podem ter ratio < 4.5:1, mas devem
  ter comentario /* decorative-only */.

## Regras de HTML Semantico
- Labels de secao devem usar <h2> (ou nivel apropriado), nunca <span>.
- SVGs decorativos: aria-hidden="true", sem <title>.
- SVGs informativos: role="img" + <title> + aria-labelledby.

## Regras de Links Externos
- Todo <a> com target="_blank" DEVE ter rel="noopener noreferrer".
- Links mailto: NAO devem ter target="_blank".

## Regras de Dados
- CNPJ: formato XX.XXX.XXX/XXXX-XX.
- Todas as URLs externas DEVEM ser HTTPS.

## Build & Lint
- npm run lint deve passar antes de qualquer commit.
- npm run build deve passar antes de qualquer push.
```

### 3. Adicionar ESLint com plugin jsx-a11y

- Instalar `eslint`, `eslint-config-next`, `eslint-plugin-jsx-a11y`.
- Criar `eslint.config.mjs` com regras:
  - `jsx-a11y/heading-has-content: error`
  - `jsx-a11y/anchor-is-valid: error`
  - `jsx-a11y/html-has-lang: error`
- Adicionar script `"lint": "next lint"` ao `package.json`.

### 4. Adicionar script de validação de contraste

Criar `scripts/check-contrast.ts` — script Node que:
1. Lê `globals.css`, extrai tokens `--nome: #hex`.
2. Calcula luminância relativa de cada token vs `--ink`.
3. Falha com exit code 1 se algum token de texto tiver ratio < 4.5:1.
4. Tokens marcados com `/* decorative-only */` são ignorados.

Adicionar script ao `package.json`:
```json
"check:contrast": "npx tsx scripts/check-contrast.ts"
```

### 5. Adicionar GitHub Actions CI

Criar `.github/workflows/ci.yml`:

```yaml
name: CI
on: [push, pull_request]
jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm run lint
      - run: npm run check:contrast
      - run: npm run build
```

### 6. (Opcional) Pre-commit hook com Husky + lint-staged

Instalar `husky` e `lint-staged` para rodar ESLint em arquivos staged
antes de cada commit. Isso é opcional porque a CI já cobre, mas dá
feedback imediato ao dev.

---

## Ordem de execução

| Passo | Depende de | Arquivos tocados |
|-------|------------|------------------|
| 1 — Corrigir achados | — | `globals.css`, `page.tsx` |
| 2 — CLAUDE.md | — | `CLAUDE.md` (novo) |
| 3 — ESLint | — | `package.json`, `eslint.config.mjs` (novo) |
| 4 — check-contrast | Passo 1 | `scripts/check-contrast.ts` (novo), `package.json` |
| 5 — CI | Passos 3, 4 | `.github/workflows/ci.yml` (novo) |
| 6 — Husky (opcional) | Passo 3 | `package.json`, `.husky/` (novo) |

## Resultado esperado

- Nenhum token com contraste insuficiente chega a produção.
- Nenhum heading semântico é omitido sem que o lint acuse.
- Toda PR passa por CI com lint + contraste + build.
- CLAUDE.md garante que agentes AI seguem as mesmas regras.
