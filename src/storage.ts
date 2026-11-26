import participantesJson from './data/participantes.json'

export interface Resultado {
  ganador: string
  participantes: string[]
  fecha: string
}

const KEY_PARTICIPANTES = 'participantes.json'
const KEY_RESULTADO = 'resultado.json'

/** Entrada: lista de concursantes (JSON). Si no hay guardada, usa el JSON inicial. */
export function cargarParticipantes(): string[] {
  const raw = localStorage.getItem(KEY_PARTICIPANTES)
  if (raw) {
    try {
      return (JSON.parse(raw) as { participantes: string[] }).participantes
    } catch {
      /* JSON corrupto: se usa el inicial */
    }
  }
  return participantesJson.participantes
}

export function guardarParticipantes(participantes: string[]): void {
  localStorage.setItem(KEY_PARTICIPANTES, JSON.stringify({ participantes }, null, 2))
}

/** Salida: ganador guardado en un JSON aparte. */
export function guardarResultado(resultado: Resultado): void {
  localStorage.setItem(KEY_RESULTADO, JSON.stringify(resultado, null, 2))
}

export function cargarResultado(): Resultado | null {
  const raw = localStorage.getItem(KEY_RESULTADO)
  if (!raw) return null
  try {
    return JSON.parse(raw) as Resultado
  } catch {
    return null
  }
}
