/** Agrega un nombre a la lista; ignora nombres vacíos o solo con espacios. */
export function agregarParticipante(participantes: string[], nombre: string): string[] {
  const limpio = nombre.trim()
  return limpio ? [...participantes, limpio] : participantes
}

export function quitarParticipante(participantes: string[], indice: number): string[] {
  return participantes.filter((_, i) => i !== indice)
}
