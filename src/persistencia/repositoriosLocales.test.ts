import { beforeEach, describe, expect, it } from 'vitest'
import {
  CLAVE_RESULTADO,
  crearRepositorioParticipantes,
  crearRepositorioResultados,
  type Almacen,
} from './repositoriosLocales'

function crearAlmacenFalso(): Almacen & { datos: Map<string, string> } {
  const datos = new Map<string, string>()
  return {
    datos,
    getItem: (clave) => datos.get(clave) ?? null,
    setItem: (clave, valor) => void datos.set(clave, valor),
  }
}

describe('repositorio de participantes', () => {
  let almacen: ReturnType<typeof crearAlmacenFalso>
  beforeEach(() => {
    almacen = crearAlmacenFalso()
  })

  it('devuelve la lista inicial si no hay nada guardado', () => {
    expect(crearRepositorioParticipantes(almacen, ['Ana']).cargar()).toEqual(['Ana'])
  })

  it('devuelve lo guardado', () => {
    const repositorio = crearRepositorioParticipantes(almacen, ['Ana'])
    repositorio.guardar(['Pedro', 'María'])
    expect(repositorio.cargar()).toEqual(['Pedro', 'María'])
  })
})

describe('repositorio de resultados', () => {
  const resultado = { ganador: 'María', participantes: ['Ana', 'María'], fecha: '2026-01-01T00:00:00.000Z' }

  it('devuelve null si no hay resultado', () => {
    expect(crearRepositorioResultados(crearAlmacenFalso()).cargar()).toBeNull()
  })

  it('guarda y carga el resultado como JSON', () => {
    const almacen = crearAlmacenFalso()
    const repositorio = crearRepositorioResultados(almacen)
    repositorio.guardar(resultado)
    expect(JSON.parse(almacen.datos.get(CLAVE_RESULTADO)!)).toEqual(resultado)
    expect(repositorio.cargar()).toEqual(resultado)
  })

  it('devuelve null si el JSON guardado está corrupto', () => {
    const almacen = crearAlmacenFalso()
    almacen.setItem(CLAVE_RESULTADO, '{no es json')
    expect(crearRepositorioResultados(almacen).cargar()).toBeNull()
  })
})
