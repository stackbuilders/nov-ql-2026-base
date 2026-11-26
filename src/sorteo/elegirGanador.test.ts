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

  it('falla si no hay participantes', () => {
    expect(() => elegirGanador([], () => 0)).toThrow()
  })
})
