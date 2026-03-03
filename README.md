# leoamerico.me

Currículo e portfólio de Leonardo Americo — engenheiro de software e fundador da [ENV-NEO LTDA](https://envneo.com.br).

**Stack:** Next.js 15 · React 19 · TypeScript 5.7 · CSS puro — sem frameworks de UI externos.

**Deploy:** Vercel · Auto-deploy via push em `main`.

---

## Estrutura

```
app/
  page.tsx            Página principal (currículo completo)
  layout.tsx          Layout global + metadados SEO
  globals.css         Design system (variáveis, tipografia, componentes)
  components/
    VerseBlock.tsx    Bloco de versículo bíblico (PT/EN, acessível)
  lib/
    verses.ts         Fonte única de dados de versículos
  ProfilePhoto.tsx    Foto de perfil com blur progressivo
  opengraph-image.tsx OG image gerada via Next.js
  robots.ts           robots.txt
  sitemap.ts          sitemap.xml dinâmico
public/
  assets/             Imagens e ícones
  fonts/              Fontes locais
```

## Desenvolvimento local

```bash
npm install
npm run dev
# http://localhost:3000
```

## Princípios do design

- Sem dependências de UI — zero Tailwind, zero Framer Motion
- CSS variables para todo o sistema de design (`--ink`, `--gold`, `--parchment`)
- Acessibilidade nativa: `prefers-reduced-motion`, ARIA completo, contraste verificado
- Performance: fontes locais, sem web fonts externas, OG image via edge

---

*"Se o Senhor não edificar a casa, em vão trabalham os que a edificam." — Sl 127:1*