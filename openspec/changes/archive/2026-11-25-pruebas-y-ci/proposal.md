# Proposal

## Why

Hoy nada avisa si un cambio rompe el selector de ganadores: las pruebas existentes cubren solo la lógica interna y no se ejecutan automáticamente. Antes de agregar funcionalidades necesitamos guard rails que verifiquen lo que dicen las especificaciones y que se ejecuten solos en cada cambio.

## What Changes

- Agregar pruebas automáticas, deterministas, que verifican los escenarios de las especificaciones: agregar participantes, un único ganador, el ganador siempre es de la lista, no sortear sin participantes y color base azul aplicado a la interfaz.
- Agregar pruebas de interfaz que ejercitan los flujos de usuario con un generador aleatorio y un almacenamiento falsos.
- Exigir un único comando para pruebas (`npm test`) y uno para el linter (`npm run lint`).
- Agregar un workflow de GitHub Actions que ejecuta el linter y las pruebas en cada `push` y en cada pull request hacia `main`, y falla si algo falla.
- Documentar en `README.md` cómo ejecutar pruebas y linter.
- Sin cambios en el comportamiento de la aplicación.

## Capabilities

### New Capabilities
- `verificacion-automatica`: el proyecto se verifica con un solo comando para pruebas y uno para el linter, y esas verificaciones se ejecutan automáticamente en cada `push` y pull request hacia `main`.

### Modified Capabilities

(ninguna: el comportamiento de la aplicación no cambia; las pruebas nuevas verifican las especificaciones existentes)

## Impact

- Nuevo `.github/workflows/ci.yml`.
- Nuevas pruebas en `src/`.
- Dependencias de desarrollo nuevas: `jsdom`, `@testing-library/react` y `@testing-library/user-event`, necesarias para probar la interfaz.
- `README.md` y `package.json` (configuración de pruebas).
