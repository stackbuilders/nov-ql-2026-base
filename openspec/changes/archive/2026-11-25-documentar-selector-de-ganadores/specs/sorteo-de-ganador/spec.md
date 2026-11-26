# Spec Delta

## Purpose

Define cómo se ejecuta el sorteo, cómo se elige un único ganador al azar, cómo se guarda el resultado en un JSON aparte y cómo se muestra en la página de ganador.

## ADDED Requirements

### Requirement: Iniciar el sorteo
La aplicación SHALL ofrecer un botón identificable con el texto "Sortear ganador" para ejecutar el sorteo.

#### Scenario: Botón disponible
- **WHEN** la lista tiene al menos dos participantes
- **THEN** el botón "Sortear ganador" está habilitado

#### Scenario: Participantes insuficientes
- **WHEN** la lista tiene menos de dos participantes
- **THEN** el botón "Sortear ganador" está deshabilitado
- **AND** se muestra el mensaje "Agrega al menos 2 participantes."

### Requirement: Elegir un único ganador al azar
Al ejecutar el sorteo, la aplicación SHALL elegir exactamente un participante de la lista, con la misma probabilidad para todos.

#### Scenario: Sorteo con varios participantes
- **WHEN** el usuario presiona "Sortear ganador" con los participantes Ana, Pedro, María, Luis y Sofía
- **THEN** se elige un único participante de esa lista como ganador
- **AND** el resultado puede ser distinto en cada ejecución

### Requirement: Mostrar al ganador de forma destacada
Tras el sorteo, la aplicación SHALL llevar al usuario a la página de ganador y mostrar el mensaje "¡Tenemos un ganador!" con el nombre del ganador en grande.

#### Scenario: Resultado del sorteo
- **WHEN** el sorteo termina y María resulta ganadora
- **THEN** se muestra "¡Tenemos un ganador!" y debajo, en tamaño destacado, "María"
- **AND** se indica entre cuántos participantes se sorteó y la fecha y hora del sorteo

### Requirement: Guardar el resultado en un JSON aparte
La aplicación SHALL guardar el resultado del sorteo en un JSON independiente del JSON de participantes, con el ganador, los participantes y la fecha, y la página de ganador SHALL cargar su contenido de ese JSON.

#### Scenario: Guardar y recargar
- **WHEN** el sorteo termina y el usuario recarga la página de ganador
- **THEN** se muestra el mismo ganador, leído del JSON de resultado

#### Scenario: Nuevo sorteo
- **WHEN** el usuario realiza un nuevo sorteo
- **THEN** el JSON de resultado se reemplaza por el del nuevo sorteo

### Requirement: Página de ganador sin resultado
La página de ganador SHALL informar cuando aún no hay un resultado y ofrecer volver al sorteo.

#### Scenario: Sin sorteo previo
- **WHEN** el usuario abre la página de ganador sin haber realizado ningún sorteo
- **THEN** se muestra "Todavía no hay ganador." y un enlace "Ir al sorteo"

#### Scenario: Volver a sortear
- **WHEN** el usuario presiona "Nuevo sorteo" en la página de ganador
- **THEN** regresa a la página de sorteo con su lista de participantes
