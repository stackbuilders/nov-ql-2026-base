import { describe, expect, it } from 'vitest'
import { elegirGanador } from './elegirGanador'

const participantes = ['Ana', 'Pedro', 'María', 'Luis', 'Sofía']

describe('elegirGanador', () => {
  it('elige el primer participante cuando el generador devuelve 0', () => {
    expect(elegirGanador(participantes, () => 0)).toBe('Ana')
  })

  it('elige el último participante cuando el generador devuelve casi 1', () => {
    expect(elegirGanador(participantes, () => 0.999999)).toBe('Sofía')
  })

  it('elige según el valor del generador', () => {
    expect(elegirGanador(participantes, () => 0.5)).toBe('María')
  })

  it('el ganador siempre es uno de los participantes, para cualquier valor del generador', () => {
    const valores = [0, 0.0001, 0.19999, 0.2, 0.2001, 0.4, 0.6, 0.8, 0.99999, 0.9999999999999999]
    for (const valor of valores) {
      expect(participantes).toContain(elegirGanador(participantes, () => valor))
    }
  })

  it('devuelve un único participante, no una lista', () => {
    expect(typeof elegirGanador(participantes, () => 0.3)).toBe('string')
  })

  it('con un solo participante, ese es el ganador', () => {
    expect(elegirGanador(['Ana'], () => 0.7)).toBe('Ana')
  })

  it('falla si no hay participantes', () => {
    expect(() => elegirGanador([], () => 0)).toThrow()
  })
})
