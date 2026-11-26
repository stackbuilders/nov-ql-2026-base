import { describe, expect, it } from 'vitest'
import { agregarParticipante, quitarParticipante } from './participantes'

describe('agregarParticipante', () => {
  it('agrega el nombre sin espacios sobrantes', () => {
    expect(agregarParticipante(['Ana'], '  Pedro ')).toEqual(['Ana', 'Pedro'])
  })

  it('ignora nombres vacíos', () => {
    expect(agregarParticipante(['Ana'], '   ')).toEqual(['Ana'])
  })

  it('no modifica la lista original', () => {
    const original = ['Ana']
    agregarParticipante(original, 'Pedro')
    expect(original).toEqual(['Ana'])
  })
})

describe('quitarParticipante', () => {
  it('quita el participante del índice indicado', () => {
    expect(quitarParticipante(['Ana', 'Pedro', 'María'], 1)).toEqual(['Ana', 'María'])
  })
})
