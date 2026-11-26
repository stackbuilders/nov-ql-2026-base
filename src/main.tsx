import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import { ProveedorDependencias } from './dependencias'
import participantesIniciales from './data/participantes.json'
import { crearRepositorioParticipantes, crearRepositorioResultados } from './persistencia/repositoriosLocales'
import './styles.css'

// Punto de composición: único lugar donde se eligen las implementaciones concretas.
const dependencias = {
  participantes: crearRepositorioParticipantes(localStorage, participantesIniciales.participantes),
  resultados: crearRepositorioResultados(localStorage),
  aleatorio: Math.random,
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProveedorDependencias dependencias={dependencias}>
      <HashRouter>
        <App />
      </HashRouter>
    </ProveedorDependencias>
  </StrictMode>,
)
