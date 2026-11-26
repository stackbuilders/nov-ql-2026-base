# Tasks

## 1. Entorno de pruebas de interfaz

- [x] 1.1 Instalar `jsdom`, `@testing-library/react` y `@testing-library/user-event` como dependencias de desarrollo y verificar que `npm install` termina sin errores
- [x] 1.2 Configurar Vitest para usar jsdom en las pruebas `*.test.tsx` y verificar que `npm test` sigue pasando

## 2. Pruebas de las especificaciones

- [x] 2.1 Agregar pruebas de lógica: el ganador siempre pertenece a la lista (barrido de valores del generador) y el sorteo devuelve un único participante; verificar que `npm test` pasa
- [x] 2.2 Agregar pruebas de interfaz para agregar participantes (con espacios, vacío, quitar, lista inicial) y verificar que pasan
- [x] 2.3 Agregar pruebas de interfaz del sorteo: botón deshabilitado con menos de 2 participantes, un único ganador mostrado, resultado guardado y mostrado tras recargar la página de ganador, y página sin resultado; verificar que pasan
- [x] 2.4 Agregar una prueba del color base azul en `src/styles.css` y de que no hay selector de color en la interfaz; verificar que pasa
- [x] 2.5 Romper a propósito la lógica del sorteo y la regla de botón deshabilitado, confirmar que las pruebas fallan y revertir; verificar que `npm test` vuelve a pasar

## 3. Integración continua

- [x] 3.1 Crear `.github/workflows/ci.yml` con `push` y `pull_request` hacia `main`, que ejecute `npm ci`, `npm run lint`, `npm test` y `npm run build`; verificar que los mismos comandos pasan localmente
- [x] 3.2 Documentar en `README.md` cómo ejecutar pruebas y linter, y verificar que los comandos documentados funcionan

## Workflow follow-up

- Subir la rama y abrir un pull request hacia `main` para ver el workflow en verde (y en rojo con un fallo provocado).
- Archivar el cambio con `/openspec-archive-change`.
