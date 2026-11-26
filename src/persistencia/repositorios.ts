import type { Resultado } from '../sorteo/tipos'

export interface RepositorioParticipantes {
  cargar(): string[]
  guardar(participantes: string[]): void
}

export interface RepositorioResultados {
  cargar(): Resultado | null
  guardar(resultado: Resultado): void
}
