import type { GeneradorAleatorio } from './tipos'

export function elegirGanador(participantes: string[], aleatorio: GeneradorAleatorio): string {
  if (participantes.length === 0) {
    throw new Error('No hay participantes para sortear')
  }
  return participantes[Math.floor(aleatorio() * participantes.length)]
}
