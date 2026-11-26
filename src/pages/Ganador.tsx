import { Link } from 'react-router-dom'
import { useDependencias } from '../dependencias'

export default function Ganador() {
  const { resultados } = useDependencias()
  const resultado = resultados.cargar()

  if (!resultado) {
    return (
      <section className="card center">
        <p className="muted">Todavía no hay ganador.</p>
        <Link to="/" className="btn">Ir al sorteo</Link>
      </section>
    )
  }

  return (
    <section className="card center winner">
      <h2>¡Tenemos un ganador!</h2>
      <p className="winner-name">{resultado.ganador}</p>
      <p className="muted">
        Entre {resultado.participantes.length} participantes ·{' '}
        {new Date(resultado.fecha).toLocaleString('es')}
      </p>
      <Link to="/" className="btn">Nuevo sorteo</Link>
    </section>
  )
}
