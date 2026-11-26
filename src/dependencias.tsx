import { createContext, useContext, type ReactNode } from 'react'
import type { RepositorioParticipantes, RepositorioResultados } from './persistencia/repositorios'
import type { GeneradorAleatorio } from './sorteo/tipos'

export interface Dependencias {
  participantes: RepositorioParticipantes
  resultados: RepositorioResultados
  aleatorio: GeneradorAleatorio
}

const Contexto = createContext<Dependencias | null>(null)

export function ProveedorDependencias({
  dependencias,
  children,
}: {
  dependencias: Dependencias
  children: ReactNode
}) {
  return <Contexto.Provider value={dependencias}>{children}</Contexto.Provider>
}

export function useDependencias(): Dependencias {
  const dependencias = useContext(Contexto)
  if (!dependencias) throw new Error('Falta ProveedorDependencias')
  return dependencias
}
