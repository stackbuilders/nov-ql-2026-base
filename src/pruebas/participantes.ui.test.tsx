import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { renderizarApp } from './ayudas'

const campo = () => screen.getByLabelText('Nombre del participante')
const nombresEnLista = () => screen.getAllByRole('listitem').map((li) => li.textContent?.replace('✕', ''))

describe('Gestión de participantes', () => {
  it('muestra la lista inicial del JSON de entrada en la primera visita', () => {
    renderizarApp()
    expect(nombresEnLista()).toEqual(['Ana', 'Pedro', 'María', 'Luis', 'Sofía'])
  })

  it('agrega un participante al final y vacía el campo', async () => {
    renderizarApp()
    await userEvent.type(campo(), 'Carla')
    await userEvent.click(screen.getByRole('button', { name: 'Agregar' }))
    expect(nombresEnLista().at(-1)).toBe('Carla')
    expect(campo()).toHaveValue('')
  })

  it('agrega el nombre sin espacios iniciales ni finales', async () => {
    renderizarApp({ iniciales: [] })
    await userEvent.type(campo(), '  Pedro  ')
    await userEvent.click(screen.getByRole('button', { name: 'Agregar' }))
    expect(nombresEnLista()).toEqual(['Pedro'])
  })

  it('ignora nombres vacíos o con solo espacios', async () => {
    renderizarApp({ iniciales: ['Ana'] })
    await userEvent.type(campo(), '   ')
    await userEvent.click(screen.getByRole('button', { name: 'Agregar' }))
    expect(nombresEnLista()).toEqual(['Ana'])
  })

  it('permite agregar varios participantes', async () => {
    renderizarApp({ iniciales: [] })
    for (const nombre of ['Ana', 'Pedro', 'María']) {
      await userEvent.type(campo(), `${nombre}{Enter}`)
    }
    expect(nombresEnLista()).toEqual(['Ana', 'Pedro', 'María'])
  })

  it('quita un participante y conserva a los demás', async () => {
    renderizarApp({ iniciales: ['Ana', 'Pedro', 'María'] })
    await userEvent.click(screen.getByRole('button', { name: 'Quitar Pedro' }))
    expect(nombresEnLista()).toEqual(['Ana', 'María'])
  })

  it('muestra un mensaje cuando no hay participantes', () => {
    renderizarApp({ iniciales: [] })
    expect(screen.getByText('Aún no hay participantes.')).toBeInTheDocument()
  })

  it('conserva los cambios al recargar la página', async () => {
    const app = renderizarApp({ iniciales: ['Ana'] })
    await userEvent.type(campo(), 'Carla{Enter}')
    app.recargar('/')
    expect(nombresEnLista()).toEqual(['Ana', 'Carla'])
  })
})
