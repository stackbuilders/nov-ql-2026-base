# Tasks

## 1. Verificar gestión de participantes

- [x] 1.1 Comparar cada escenario de `gestion-de-participantes` con el comportamiento real y con las pruebas de `src/sorteo/participantes.test.ts` y `src/persistencia/repositoriosLocales.test.ts`; verificar que `npm test` pasa
- [x] 1.2 Si algún escenario no tiene prueba (por ejemplo, lista inicial desde el JSON de entrada), agregarla y verificar que `npm test` pasa

## 2. Verificar tema visual

- [x] 2.1 Comprobar que `src/styles.css` define todos los colores como variables en `:root`, con el azul como base, y que `npm run lint` y la búsqueda de hex en `src/**/*.tsx` no encuentran colores sueltos
- [x] 2.2 Confirmar por lectura del código que la interfaz no tiene selector de color y que el azul viene de las variables; la prueba automática de interfaz queda en el cambio `pruebas-y-ci`

## 3. Verificar sorteo de ganador

- [x] 3.1 Comparar cada escenario de `sorteo-de-ganador` con el comportamiento real y con `src/sorteo/elegirGanador.test.ts`; verificar que `npm test` pasa
- [x] 3.2 Confirmar por lectura del código el flujo de interfaz (sortear, ver ganador, recargar, "Nuevo sorteo", `#/ganador` sin sorteo); las pruebas automáticas de interfaz quedan en el cambio `pruebas-y-ci`

## 4. Regla en AGENTS.md

- [x] 4.1 Agregar a `AGENTS.md` la regla de que todo cambio nuevo se especifica primero con OpenSpec, y aclarar que los cambios en `openspec/` se hacen con ese flujo; verificar leyendo el archivo

## 5. Validación

- [x] 5.1 Ejecutar `npx openspec validate documentar-selector-de-ganadores --strict` y verificar que no hay errores ni advertencias
- [x] 5.2 Ejecutar `npm test`, `npm run build` y `npm run lint` y verificar que pasan

## Workflow follow-up

- Archivar el cambio con `/openspec-archive-change`.
- Verificar que `openspec/specs/` contiene las tres especificaciones y que el cambio quedó en `openspec/changes/archive/`.
