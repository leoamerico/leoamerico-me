/**
 * Env Neo — Verses
 * Versos bíblicos integrados sutilmente como referência ética.
 * Visíveis como camada de profundidade — não como declaração religiosa.
 */

export type Lang = 'pt' | 'en'

export const VERSES = {
  /**
   * Hero — alicerce e sustentação
   * Usado como subtítulo de fundo ético da governança pública.
   */
  hero: {
    text: 'Porque os alicerces da terra são do Senhor,\ne sobre eles assentou o mundo.',
    ref: '1 Sm 2:8',
  },

  /**
   * Footer — obra que permanece
   * Se o Senhor não edificar — trabalho sem alicerce não sustenta.
   */
  footer: {
    text: 'Se o Senhor não edificar a casa,\nem vão trabalham os que a edificam.',
    ref: 'Sl 127:1',
  },

  /**
   * Princípios / Filosofia — legado e dádiva
   * Posicionado após P1-P4, antes da seção Contato.
   * Tg 1:17: toda boa dádiva vem do alto — carreira como presente, não conquista.
   * 2 Tm 4:13: os pergaminhos — o conhecimento acumulado tem valor perene.
   */
  legado: {
    pt: {
      text: 'O conjunto destes blocos de verdade sobre minha carreira,\ncomo pergaminhos antigos, aceito-os como dádivas de Deus.',
      refs: ['Tg 1:17', '2 Tm 4:13'],
      tooltip: '"Toda boa dádiva e todo dom perfeito vêm do alto,\ndescendo do Pai das luzes." — Tg 1:17',
      ariaLabel: 'Verso inspiracional sobre dádivas divinas na carreira',
      hide: 'Ocultar inspiração',
      show: '+ Inspiração',
    },
    en: {
      text: 'These blocks of truth about my career,\nlike ancient scrolls, I receive as gifts from God.',
      refs: ['Jas 1:17', '2 Tim 4:13'],
      tooltip: '"Every good gift and every perfect gift is from above,\ncoming down from the Father of lights." — Jas 1:17',
      ariaLabel: 'Inspirational verse on divine gifts in career',
      hide: 'Hide inspiration',
      show: '+ Inspiration',
    },
  },
} as const

export type VerseKey = keyof typeof VERSES
