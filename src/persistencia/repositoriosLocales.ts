import type { Resultado } from '../sorteo/tipos'
import type { RepositorioParticipantes, RepositorioResultados } from './repositorios'

/** Subconjunto de Storage que necesitamos; permite inyectar un doble en las pruebas. */
export type Almacen = Pick<Storage, 'getItem' | 'setItem'>

export const CLAVE_PARTICIPANTES = 'participantes.json'
export const CLAVE_RESULTADO = 'resultado.json'

function leerJson<T>(almacen: Almacen, clave: string): T | null {
  const crudo = almacen.getItem(clave)
  if (!crudo) return null
  try {
    return JSON.parse(crudo) as T
  } catch {
    return null
  }
}

export function crearRepositorioParticipantes(
  almacen: Almacen,
  iniciales: string[],
): RepositorioParticipantes {
  return {
    cargar: () => leerJson<{ participantes: string[] }>(almacen, CLAVE_PARTICIPANTES)?.participantes ?? iniciales,
    guardar: (participantes) =>
      almacen.setItem(CLAVE_PARTICIPANTES, JSON.stringify({ participantes }, null, 2)),
  }
}

export function crearRepositorioResultados(almacen: Almacen): RepositorioResultados {
  return {
    cargar: () => leerJson<Resultado>(almacen, CLAVE_RESULTADO),
    guardar: (resultado) => almacen.setItem(CLAVE_RESULTADO, JSON.stringify(resultado, null, 2)),
  }
}
