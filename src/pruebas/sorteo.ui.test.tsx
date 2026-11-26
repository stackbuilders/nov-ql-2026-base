import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { CLAVE_RESULTADO } from '../persistencia/repositoriosLocales'
import { crearAlmacenEnMemoria, renderizarApp } from './ayudas'

const botonSortear = () => screen.getByRole('button', { name: 'Sortear ganador' })

describe('Sorteo de ganador', () => {
  it('habilita el botón con al menos dos participantes', () => {
    renderizarApp({ iniciales: ['Ana', 'Pedro'] })
    expect(botonSortear()).toBeEnabled()
  })

  it.each([[[]], [['Ana']]])('no permite sortear con menos de dos participantes (%j)', (iniciales) => {
    renderizarApp({ iniciales })
    expect(botonSortear()).toBeDisabled()
    expect(screen.getByText('Agrega al menos 2 participantes.')).toBeInTheDocument()
  })

  it('muestra un único ganador destacado, elegido por el generador', async () => {
    renderizarApp({ iniciales: ['Ana', 'Pedro', 'María', 'Luis', 'Sofía'], aleatorio: () => 0.5 })
    await userEvent.click(botonSortear())
    expect(screen.getByText('¡Tenemos un ganador!')).toBeInTheDocument()
    expect(document.querySelectorAll('.winner-name')).toHaveLength(1)
    expect(document.querySelector('.winner-name')).toHaveTextContent('María')
  })

  it('indica entre cuántos participantes se sorteó', async () => {
    renderizarApp({ iniciales: ['Ana', 'Pedro', 'María'] })
    await userEvent.click(botonSortear())
    expect(screen.getByText(/Entre 3 participantes/)).toBeInTheDocument()
  })

  it('guarda el resultado en un JSON aparte y lo muestra al recargar la página de ganador', async () => {
    const almacen = crearAlmacenEnMemoria()
    const app = renderizarApp({ almacen, iniciales: ['Ana', 'Pedro'], aleatorio: () => 0.99 })
    await userEvent.click(botonSortear())

    expect(JSON.parse(almacen.getItem(CLAVE_RESULTADO)!)).toMatchObject({
      ganador: 'Pedro',
      participantes: ['Ana', 'Pedro'],
    })
    app.recargar('/ganador')
    expect(document.querySelector('.winner-name')).toHaveTextContent('Pedro')
  })

  it('reemplaza el resultado anterior en un nuevo sorteo', async () => {
    const almacen = crearAlmacenEnMemoria()
    let valor = 0
    renderizarApp({ almacen, iniciales: ['Ana', 'Pedro'], aleatorio: () => valor })
    await userEvent.click(botonSortear())
    await userEvent.click(screen.getByRole('link', { name: 'Nuevo sorteo' }))
    valor = 0.99
    await userEvent.click(botonSortear())
    expect(JSON.parse(almacen.getItem(CLAVE_RESULTADO)!).ganador).toBe('Pedro')
  })

  it('"Nuevo sorteo" vuelve a la página de sorteo con la lista', async () => {
    renderizarApp({ iniciales: ['Ana', 'Pedro'] })
    await userEvent.click(botonSortear())
    await userEvent.click(screen.getByRole('link', { name: 'Nuevo sorteo' }))
    expect(botonSortear()).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(2)
  })

  it('informa cuando no hay ganador y ofrece volver al sorteo', () => {
    renderizarApp({ ruta: '/ganador' })
    expect(screen.getByText('Todavía no hay ganador.')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Ir al sorteo' })).toBeInTheDocument()
  })
})
