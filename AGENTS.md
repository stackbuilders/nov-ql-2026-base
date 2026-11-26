# AGENTS.md

## Proyecto
Selector de ganadores para sorteos. Solo frontend: React + TypeScript + Vite. Sin backend.
Entrada: JSON de participantes. Salida: JSON del ganador, guardado aparte y mostrado en la página de ganador. Persistencia en `localStorage`.

## Comandos
- Instalar: `npm install`
- Ejecutar: `npm run dev`
- Pruebas: `npm test` (Vitest)
- Revisar: `npm run build` (incluye `tsc`) y `npm run lint`

## Pruebas
- Todo cambio de comportamiento incluye pruebas automáticas.
- Una tarea no está terminada si `npm test` o `npm run build` fallan.
- La lógica pura (sorteo, validación de nombres) se prueba con pruebas unitarias.
- Las pruebas no dependen del azar ni del `localStorage` real; usan dobles.

## Diseño del código
- La lógica del sorteo vive en `src/sorteo/` y no importa React ni `localStorage`.
- `elegirGanador(participantes, random)` recibe el generador aleatorio como parámetro. `Math.random()` solo se llama en el punto de composición.
- La persistencia va detrás de una interfaz (`RepositorioResultados`). Los componentes reciben la implementación por props o contexto.
- Los componentes solo renderizan y delegan; no contienen reglas de negocio.
- Un archivo, una responsabilidad.

## Estilo
- TypeScript estricto: sin `any` ni `@ts-ignore`.
- Nombres en español, sin mezclar con inglés.
- Los colores salen de las variables CSS de `:root`; no se escriben hex sueltos en los componentes.
- Se conservan los textos "Sortear ganador" y "¡Tenemos un ganador!".

## Forma de trabajo
- Haz solo lo que pide el ticket; no agregues funcionalidades extra.
- Si algo es ambiguo, pregunta antes de decidir.
- Al terminar, reporta qué comandos corriste y su resultado, y qué no verificaste.
- Si la IA comete un error que una regla habría evitado, agrega esa regla aquí.

## Lo que la IA no debe hacer
- Agregar dependencias sin preguntar.
- Crear un backend ni usar servicios externos.
- Cambiar el color base sin que el desarrollador lo pida.
- Modificar `openspec/`, `.agents/` o los workflows de CI sin que se lo pidan.
- Hacer commit, push o `git reset --hard` sin que se lo pidan.
- Dejar `console.log`, código comentado o archivos temporales.
- Cambiar el comportamiento de la aplicación durante un refactor.
