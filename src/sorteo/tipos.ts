export interface Resultado {
  ganador: string
  participantes: string[]
  fecha: string
}

/** Generador de números aleatorios en el rango [0, 1), como Math.random. */
export type GeneradorAleatorio = () => number
