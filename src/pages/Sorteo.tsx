import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { cargarParticipantes, guardarParticipantes, guardarResultado } from '../storage'

export default function Sorteo() {
  const [participantes, setParticipantes] = useState<string[]>(cargarParticipantes)
  const [nombre, setNombre] = useState('')
  const navigate = useNavigate()

  const actualizar = (lista: string[]) => {
    setParticipantes(lista)
    guardarParticipantes(lista)
  }

  const agregar = (e: FormEvent) => {
    e.preventDefault()
    const limpio = nombre.trim()
    if (limpio) actualizar([...participantes, limpio])
    setNombre('')
  }

  const sortear = () => {
    const ganador = participantes[Math.floor(Math.random() * participantes.length)]
    guardarResultado({ ganador, participantes, fecha: new Date().toISOString() })
    navigate('/ganador')
  }

  return (
    <section className="card">
      <h2>Participantes</h2>
      <form onSubmit={agregar} className="row">
        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre del participante"
          aria-label="Nombre del participante"
        />
        <button type="submit">Agregar</button>
      </form>

      {participantes.length === 0 ? (
        <p className="muted">Aún no hay participantes.</p>
      ) : (
        <ul className="list">
          {participantes.map((p, i) => (
            <li key={`${p}-${i}`}>
              {p}
              <button
                className="link"
                onClick={() => actualizar(participantes.filter((_, j) => j !== i))}
                aria-label={`Quitar ${p}`}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}

      <button className="big" onClick={sortear} disabled={participantes.length < 2}>
        Sortear ganador
      </button>
      {participantes.length < 2 && <p className="muted">Agrega al menos 2 participantes.</p>}
    </section>
  )
}
