# Tasks

## 1. Verificar gestión de participantes

- [ ] 1.1 Comparar cada escenario de `gestion-de-participantes` con el comportamiento real y con las pruebas de `src/sorteo/participantes.test.ts` y `src/persistencia/repositoriosLocales.test.ts`; verificar que `npm test` pasa
- [ ] 1.2 Si algún escenario no tiene prueba (por ejemplo, lista inicial desde el JSON de entrada), agregarla y verificar que `npm test` pasa

## 2. Verificar tema visual

- [ ] 2.1 Comprobar que `src/styles.css` define todos los colores como variables en `:root`, con el azul como base, y que `npm run lint` y la búsqueda de hex en `src/**/*.tsx` no encuentran colores sueltos
- [ ] 2.2 Abrir la aplicación con `npm run dev` y confirmar que la interfaz es azul y no existe un selector de color

## 3. Verificar sorteo de ganador

- [ ] 3.1 Comparar cada escenario de `sorteo-de-ganador` con el comportamiento real y con `src/sorteo/elegirGanador.test.ts`; verificar que `npm test` pasa
- [ ] 3.2 Probar manualmente en `npm run dev`: sortear, ver el ganador, recargar la página de ganador, volver con "Nuevo sorteo" y abrir `#/ganador` sin sorteo previo

## 4. Regla en AGENTS.md

- [ ] 4.1 Agregar a `AGENTS.md` la regla de que todo cambio nuevo se especifica primero con OpenSpec, y aclarar que los cambios en `openspec/` se hacen con ese flujo; verificar leyendo el archivo

## 5. Validación

- [ ] 5.1 Ejecutar `npx openspec validate documentar-selector-de-ganadores --strict` y verificar que no hay errores ni advertencias
- [ ] 5.2 Ejecutar `npm test`, `npm run build` y `npm run lint` y verificar que pasan

## Workflow follow-up

- Archivar el cambio con `/openspec-archive-change`.
- Verificar que `openspec/specs/` contiene las tres especificaciones y que el cambio quedó en `openspec/changes/archive/`.
