import { NavLink, Route, Routes } from 'react-router-dom'
import Sorteo from './pages/Sorteo'
import Ganador from './pages/Ganador'

export default function App() {
  return (
    <>
      <header className="header">
        <h1>🎲 Selector de ganadores</h1>
        <nav>
          <NavLink to="/" end>Sorteo</NavLink>
          <NavLink to="/ganador">Ganador</NavLink>
        </nav>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Sorteo />} />
          <Route path="/ganador" element={<Ganador />} />
        </Routes>
      </main>
    </>
  )
}
