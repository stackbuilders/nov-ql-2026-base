# Design

## Context

Ya existen `npm test` (Vitest) y `npm run lint` (ESLint), con pruebas de la lógica pura y de los repositorios. Falta probar la interfaz y automatizar la ejecución. Ver proposal.md para la motivación.

## Goals / Non-Goals

**Goals:**
- Probar los escenarios de las especificaciones a través de la interfaz, con dependencias inyectadas.
- Un workflow simple y rápido que falle de forma visible.

**Non-Goals:**
- Pruebas end-to-end en un navegador real (Playwright).
- Medir cobertura de código ni formatear con Prettier.
- Despliegue (es otro ticket).

## Decisions

- **Vitest + Testing Library + jsdom:** reutiliza el ejecutor existente y prueba la interfaz como la usa una persona (roles y textos). Alternativa descartada: Playwright, más pesado y no necesario para esta etapa.
- **Dependencias inyectadas en las pruebas:** se renderiza la aplicación con `ProveedorDependencias`, un generador aleatorio falso y un almacén en memoria; así no hay azar ni `localStorage` real.
- **Color base verificado leyendo `src/styles.css`:** jsdom no calcula estilos importados desde CSS, así que la prueba lee las variables de `:root`, comprueba que el color base es azul y que la interfaz lo usa. Alternativa descartada: instantáneas de estilos, frágiles.
- **"El ganador siempre es de la lista" con barrido de valores:** se prueba con muchos valores del generador en [0, 1), incluidos los extremos, en lugar de azar real.
- **Un solo workflow `ci.yml`:** pasos `npm ci`, `npm run lint`, `npm test` y `npm run build`, en Node 22.20 o superior, disparado por `push` y `pull_request` hacia `main`.
- **Comprobar que las pruebas detectan errores:** se rompe el código a propósito, se confirma que fallan y se revierte.

## Risks / Trade-offs

- [El workflow no se puede ver en rojo o verde hasta subirlo a GitHub] → Se valida localmente la sintaxis y los comandos, y se confirma en el primer pull request.
- [La prueba de color depende del texto de `styles.css`] → Se limita a las variables de color documentadas en la especificación.
- [Dependencias nuevas de desarrollo] → Solo `jsdom`, `@testing-library/react` y `@testing-library/user-event`; no afectan la aplicación en producción.
