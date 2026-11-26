# Spec Delta

## Purpose

Define el color base de la interfaz, elegido por el desarrollador y no por el usuario final, para mantener una identidad visual consistente.

## ADDED Requirements

### Requirement: Color base azul
La aplicación SHALL usar el azul como color base de toda la interfaz: encabezado, botones, bordes y destacados.

#### Scenario: Aspecto de la interfaz
- **WHEN** el usuario abre cualquier página de la aplicación
- **THEN** el encabezado, los botones y los elementos destacados se muestran en tonos de azul

### Requirement: El usuario final no elige el color
La aplicación SHALL NOT ofrecer ningún control para cambiar el color base.

#### Scenario: Sin selector de color
- **WHEN** el usuario recorre la interfaz
- **THEN** no existe ningún control para cambiar el color de la aplicación

### Requirement: Cambio de color solo por el desarrollador
El color base SHALL poder cambiarse únicamente modificando la definición de colores del proyecto, en un único lugar.

#### Scenario: Cambiar el color base
- **WHEN** el desarrollador modifica los valores de color definidos en la hoja de estilos
- **THEN** toda la interfaz adopta el nuevo color sin editar componentes individuales
