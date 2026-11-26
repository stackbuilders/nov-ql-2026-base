# Spec Delta

## Purpose

Define cómo el usuario ve, agrega y quita participantes del sorteo, y cómo se conserva la lista entre visitas a la aplicación.

## ADDED Requirements

### Requirement: Lista inicial de participantes
La aplicación SHALL mostrar, la primera vez que se abre, la lista de participantes definida en el JSON de entrada del proyecto.

#### Scenario: Primera visita
- **WHEN** el usuario abre la aplicación sin datos guardados previamente
- **THEN** se muestran los participantes del JSON de entrada: Ana, Pedro, María, Luis y Sofía

### Requirement: Agregar participantes
La aplicación SHALL permitir agregar varios participantes mediante un campo de nombre y un botón "Agregar", o enviando el formulario.

#### Scenario: Agregar un participante
- **WHEN** el usuario escribe "Carla" en el campo de nombre y presiona "Agregar"
- **THEN** "Carla" aparece al final de la lista de participantes
- **AND** el campo de nombre queda vacío

#### Scenario: Espacios sobrantes
- **WHEN** el usuario agrega el nombre "  Pedro  "
- **THEN** se agrega "Pedro" sin los espacios iniciales ni finales

#### Scenario: Nombre vacío
- **WHEN** el usuario presiona "Agregar" con el campo vacío o solo con espacios
- **THEN** la lista de participantes no cambia

### Requirement: Quitar participantes
La aplicación SHALL permitir quitar un participante de la lista.

#### Scenario: Quitar un participante
- **WHEN** el usuario presiona el botón de quitar junto a "Pedro"
- **THEN** "Pedro" desaparece de la lista y los demás participantes se conservan

#### Scenario: Lista vacía
- **WHEN** la lista no tiene participantes
- **THEN** se muestra el mensaje "Aún no hay participantes."

### Requirement: Conservar la lista entre visitas
La aplicación SHALL conservar en el navegador los cambios hechos a la lista de participantes.

#### Scenario: Recargar la página
- **WHEN** el usuario agrega un participante y recarga la página
- **THEN** la lista muestra los participantes tal como quedaron, incluido el nuevo
