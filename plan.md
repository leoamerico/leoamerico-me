# Plano: Refinamento Profissional das Esferas SVG

## Diagnóstico — O que faz as esferas atuais parecerem amadoras

### Problemas Identificados

#### 1. Proporções arbitrárias sem fundamento matemático
- EnvNeo: `r=42`, `ry=10.5` (ratio 0.25) → ângulo de ~14.5° — não corresponde a nenhum padrão isométrico
- Govevia: `r=64`, `ry=16` (ratio 0.25) → mesmo ratio, mas viewBox diferente (120 vs 160)
- O ratio 0.25 é achatado demais — a elipse parece uma fenda estreita, não um equador com volume

#### 2. Sistemas de coordenadas inconsistentes
- EnvNeo: viewBox `120×120`, centro em `(60,60)`, elementos diretos
- Govevia: viewBox `160×160`, centro em `(80,80)` via `<g transform>`
- Não há template reutilizável para adicionar uma terceira marca

#### 3. Meridianos assimétricos entre logos
- EnvNeo: meridianos vão exatamente do polo ao equador (simétricos)
- Govevia: meridiano superior começa 14 unidades abaixo do polo; inferior toca o polo exatamente
- Assimetria sem propósito visual — lê-se como imprecisão

#### 4. Opacidades sem sistema
- EnvNeo: círculo `0.25`, meridianos `0.18`, equador `1.0`
- Govevia: arco `0.18`, meridianos `0.12`, equador `1.0`
- Não seguem progressão geométrica nem Fibonacci — parecem ajustadas "a olho"

#### 5. Stroke widths sem hierarquia compartilhada
- EnvNeo: equador/círculo = `3.2/1.5` = 2.13×
- Govevia: equador/arco = `5.0/1.5` = 3.33×
- Ratios diferentes quebram a coerência da família de marcas

#### 6. Ausência total de profundidade
- Strokes uniformes sem gradiente — não sugerem curvatura 3D
- Sem indicação de fonte de luz
- Sem variação de espessura que simule dimensionalidade

#### 7. Gap do arco Govevia arbitrário
- Gap de ~10.8° — pequeno demais para ser gesto deliberado, grande demais para ser invisível

---

## Fundação Matemática — Esqueleto Geométrico Unificado

### Constantes do Sistema

| Token | Valor | Fundamento |
|---|---|---|
| ViewBox | `0 0 100 100` | Unificado, centro em `(50,50)` |
| Raio mestre (R) | `40` | 80% do viewBox → margem de 10 para strokes |
| Foreshortening (k) | `0.309` (1/φ²) | Derivado do golden ratio — volume elegante |
| Equator ry | `R × k = 12.36` | Proporção áurea aplicada |
| Gap Govevia | `30°` (1/12 do círculo) | Fração harmônica — gesto claro de "esfera aberta" |

### Hierarquia de Strokes (ratio 8:3:2)

| Camada | Fração de R | Valor (R=40) | Uso |
|---|---|---|---|
| Ativa (equador) | R × 0.08 | `3.2` | Marca principal — a faixa equatorial |
| Estrutural (esfera) | R × 0.03 | `1.2` | Contorno da esfera — contexto sutil |
| Detalhe (meridianos) | R × 0.02 | `0.8` | Eixo de rotação — quase imperceptível |

### Sistema de Opacidades (3 camadas)

| Camada | Opacity | Papel |
|---|---|---|
| Ghost (esfera, meridianos) | `0.15` | Quase watermark — presença sem peso |
| Structure (elementos secundários) | `0.30` | Visível mas recessivo |
| Active (equador) | `1.0` | A marca em si |

---

## Plano de Implementação

### Etapa 1 — Reescrita do EnvNeoSymbol (esfera completa)

**ViewBox:** `0 0 100 100`
**Elementos:**

1. **`<defs>`** — Definir gradiente linear horizontal para o stroke do equador:
   - Borda esquerda: opacity 0.4 → centro: opacity 1.0 → borda direita: opacity 0.4
   - Simula curvatura da esfera envolvendo o observador

2. **Círculo da esfera** — `cx="50" cy="50" r="40"`
   - `stroke="var(--gold)"` ou `#C8A84E`
   - `strokeWidth="1.2"`, `opacity="0.15"`
   - `shape-rendering="geometricPrecision"`

3. **Meridianos simétricos** — Dois segmentos verticais:
   - Superior: `(50, 10.8)` → `(50, 37.64)` — do polo (R×0.98 para cap) ao topo do equador (50 - ry×1.0)
   - Inferior: `(50, 62.36)` → `(50, 89.2)` — simétrico
   - `strokeWidth="0.8"`, `opacity="0.15"`, `strokeLinecap="round"`

4. **Elipse equatorial** — `cx="50" cy="50" rx="40" ry="12.36"`
   - `stroke` via gradiente (definido em `<defs>`)
   - `strokeWidth="3.2"`, `opacity="1.0"`

5. **Atributos SVG:** `shape-rendering="geometricPrecision"`, `<title>Env Neo</title>`

### Etapa 2 — Reescrita do GoveviaSymbol (equador cerimonial)

**ViewBox:** `0 0 100 100` (mesmo que Env Neo)
**Elementos:**

1. **`<defs>`** — Gradiente equatorial adaptado com cor Govevia/parchment

2. **Arco da esfera** — Dois arcos simétricos com gap de 30° no topo:
   - Arco principal: de 15° a 345° (330° de arco, gap de 30° centrado no topo)
   - Usa `<path>` com arco SVG
   - `stroke="#1E3A5F"`, `strokeWidth="1.2"`, `opacity="0.15"`
   - O gap é grande o suficiente para ser gesto deliberado

3. **Meridianos simétricos** — Mesma proporção que Env Neo:
   - Superior: `(50, 10.8)` → `(50, 37.64)`
   - Inferior: `(50, 62.36)` → `(50, 89.2)`
   - `stroke="#1E3A5F"`, `strokeWidth="0.8"`, `opacity="0.15"`

4. **Elipse equatorial** — Mesma geometria que Env Neo:
   - `rx="40"`, `ry="12.36"` (proporção idêntica)
   - `stroke="#FAFAF8"`, `strokeWidth="3.2"`
   - Gradiente de profundidade aplicado

5. **Atributos:** mesmos que Env Neo

### Etapa 3 — Gradientes de Profundidade

Para cada marca, definir em `<defs>`:

```
EnvNeo:  linearGradient id="eq-env"  → gold com fade nas bordas
Govevia: linearGradient id="eq-gov"  → parchment com fade nas bordas
```

O gradiente faz o equador "sumir" nas laterais, criando a ilusão de que a faixa continua atrás da esfera. Diferença sutil mas crítica entre amateur e profissional.

### Etapa 4 — Correção Óptica para Tamanhos Pequenos

Os logos são renderizados em 3 tamanhos: `18px`, `22px`, `52px`.

- A `18px`: meridianos com `strokeWidth="0.8"` e `opacity="0.15"` serão invisíveis em tela. Considerar `vector-effect="non-scaling-stroke"` ou ajuste condicional via prop
- A `52px`: todos os elementos são legíveis — este é o tamanho "ideal"
- Adicionar `shape-rendering="geometricPrecision"` para subpixel accuracy

### Etapa 5 — Integração com Design System

- Mover hardcoded hex colors para referências CSS variables onde possível
- SVGs inline em React suportam `stroke="var(--gold)"` — usar para EnvNeo
- Govevia mantém `#1E3A5F` como cor de identidade própria (definida nos dados OBRAS)

---

## Resumo Visual da Transformação

```
ANTES                              DEPOIS
─────                              ──────

EnvNeo (120×120)                   EnvNeo (100×100)
  ○ Círculo r=42, op=0.25           ○ Círculo r=40, op=0.15
  | Meridianos op=0.18              | Meridianos simétricos op=0.15
  ⊖ Equador flat, sw=3.2            ⊖ Equador com gradiente, sw=3.2

Govevia (160×160 + transform)      Govevia (100×100)
  ◠ Arco gap~11°, op=0.18           ◠ Arco gap=30°, op=0.15
  | Meridianos assimétricos          | Meridianos simétricos (= Env Neo)
  ⊖ Equador flat, sw=5.0            ⊖ Equador com gradiente, sw=3.2

Problemas:                         Resolvido:
✗ ViewBox inconsistente             ✓ ViewBox unificado 100×100
✗ Opacidades aleatórias             ✓ Sistema 0.15 / 0.30 / 1.0
✗ Strokes sem hierarquia            ✓ Ratio 8:3:2 compartilhado
✗ Meridianos assimétricos           ✓ Mesma proporção em ambos
✗ Sem profundidade                  ✓ Gradiente equatorial
✗ Foreshortening arbitrário         ✓ Baseado em 1/φ² (golden ratio)
✗ Gap Govevia ambíguo               ✓ Gap de 30° (gesto deliberado)
```

## Arquivos Afetados

- `app/page.tsx` — Reescrita dos componentes `EnvNeoSymbol` e `GoveviaSymbol`
- `app/globals.css` — Nenhuma alteração necessária (paleta já contém os tokens)
