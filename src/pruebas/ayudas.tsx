import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'
import { ProveedorDependencias } from '../dependencias'
import participantesIniciales from '../data/participantes.json'
import {
  crearRepositorioParticipantes,
  crearRepositorioResultados,
  type Almacen,
} from '../persistencia/repositoriosLocales'
import type { GeneradorAleatorio } from '../sorteo/tipos'

export function crearAlmacenEnMemoria(): Almacen {
  const datos = new Map<string, string>()
  return {
    getItem: (clave) => datos.get(clave) ?? null,
    setItem: (clave, valor) => void datos.set(clave, valor),
  }
}

interface Opciones {
  almacen?: Almacen
  aleatorio?: GeneradorAleatorio
  ruta?: string
  iniciales?: string[]
}

/** Renderiza la aplicación con dependencias falsas: sin azar y sin localStorage real. */
export function renderizarApp({
  almacen = crearAlmacenEnMemoria(),
  aleatorio = () => 0,
  ruta = '/',
  iniciales = participantesIniciales.participantes,
}: Opciones = {}) {
  const dependencias = {
    participantes: crearRepositorioParticipantes(almacen, iniciales),
    resultados: crearRepositorioResultados(almacen),
    aleatorio,
  }
  const montar = (rutaActual: string) => (
    <ProveedorDependencias dependencias={dependencias}>
      <MemoryRouter initialEntries={[rutaActual]}>
        <App />
      </MemoryRouter>
    </ProveedorDependencias>
  )
  const resultado = render(montar(ruta))
  return {
    ...resultado,
    almacen,
    /** Simula recargar la página: nueva aplicación con el mismo almacén. */
    recargar: (rutaActual: string) => {
      resultado.unmount()
      return render(montar(rutaActual))
    },
  }
}
