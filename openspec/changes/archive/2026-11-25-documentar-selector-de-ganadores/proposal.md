# Proposal

## Why

La aplicación del Reto #1 se generó sin especificación: su comportamiento solo existe en el código. Antes de agregar funcionalidades queremos una especificación que describa lo que la aplicación hace **hoy**, para que los cambios futuros se acuerden primero por escrito y después se implementen.

## What Changes

- Documentar en `openspec/specs/` el comportamiento actual de la aplicación, sin cambiar su comportamiento.
- Describir tres capacidades: gestión de participantes, tema visual con color base azul, y sorteo con presentación de un único ganador.
- Incluir en `AGENTS.md` la regla de que todo cambio nuevo se especifica primero con OpenSpec.
- No se agrega funcionalidad nueva ni se modifica el código de la aplicación.

## Capabilities

### New Capabilities
- `gestion-de-participantes`: lista de participantes, con valores iniciales cargados desde un JSON; agregar, quitar y conservar la lista entre visitas.
- `tema-visual`: color base azul aplicado de forma uniforme a toda la interfaz; el usuario final no lo elige.
- `sorteo-de-ganador`: ejecutar el sorteo, elegir aleatoriamente a un único ganador, guardar el resultado en un JSON aparte y mostrarlo en la página de ganador.

### Modified Capabilities

(ninguna: aún no existen especificaciones)

## Impact

- Archivos nuevos en `openspec/changes/documentar-selector-de-ganadores/` y, al archivar, en `openspec/specs/`.
- `AGENTS.md`: nueva regla sobre OpenSpec.
- Código de la aplicación (`src/`): sin cambios esperados. Si al verificar se detecta una diferencia entre la especificación y el comportamiento real, se corrige la especificación o se registra aparte.
- Sin dependencias nuevas.
