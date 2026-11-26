# Design

## Context

La aplicación es una SPA de React + TypeScript solo frontend. Los dos JSON (participantes y resultado) se guardan en `localStorage` porque un navegador sin backend no puede escribir archivos. La lógica del sorteo y los repositorios ya cumplen las reglas de `AGENTS.md`. Ver proposal.md para la motivación.

## Goals / Non-Goals

**Goals:**
- Que las especificaciones describan solo comportamiento observable y puedan verificarse contra la aplicación actual.
- Cerrar el flujo propuesta → implementación → archivo con una primera especificación real.

**Non-Goals:**
- Cambiar el comportamiento o la estructura del código.
- Especificar detalles internos (nombres de funciones, librerías, interfaces).

## Decisions

- **Tres capacidades en lugar de una:** `gestion-de-participantes`, `tema-visual` y `sorteo-de-ganador` tienen límites claros y evolucionarán por separado (por ejemplo, un podio o una cuenta regresiva solo tocarán el sorteo). Alternativa descartada: una sola especificación "selector-de-ganadores", que sería un cajón de sastre.
- **"JSON" como concepto del usuario, `localStorage` como detalle:** las especificaciones hablan del JSON de entrada y del JSON de resultado, y solo mencionan el navegador como lugar de conservación. Alternativa descartada: nombrar `localStorage` en los requisitos, porque acopla la especificación a la implementación.
- **La implementación es verificación:** la fase de aplicación comprueba cada escenario contra la aplicación y las pruebas existentes; solo agrega pruebas donde falte cobertura. Alternativa descartada: reescribir código para ajustarlo a la especificación, porque ésta documenta lo que ya existe.
- **Regla de OpenSpec en `AGENTS.md`:** se agrega como parte de este cambio para cumplir el criterio del ticket.

## Risks / Trade-offs

- [Un escenario no coincide con el comportamiento real] → Se verifica cada escenario durante la aplicación y se corrige la especificación, no el código.
- [El color solo se verifica visualmente] → Se comprueba con las variables de color de la hoja de estilos y una revisión manual de la interfaz.
- [`AGENTS.md` prohíbe tocar `openspec/` sin que se pida] → Este cambio lo pide explícitamente; la regla nueva aclara que los cambios en `openspec/` se hacen con el flujo de OpenSpec.
