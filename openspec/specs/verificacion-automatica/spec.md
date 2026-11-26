# verificacion-automatica Specification

## Purpose

Define las verificaciones automáticas del proyecto —pruebas y linter— y cuándo se ejecutan, para que ningún cambio rompa la aplicación sin que alguien lo note.

## Requirements

### Requirement: Pruebas con un solo comando
El proyecto SHALL permitir ejecutar todas las pruebas automáticas con el comando `npm test`.

#### Scenario: Ejecutar las pruebas localmente
- **WHEN** un desarrollador ejecuta `npm test` tras instalar las dependencias
- **THEN** se ejecutan todas las pruebas y el comando termina con éxito si todas pasan

### Requirement: Linter con un solo comando
El proyecto SHALL permitir ejecutar el linter con el comando `npm run lint`.

#### Scenario: Código con una violación
- **WHEN** el código contiene `any`, `console.log` o `Math.random` fuera del punto de composición
- **THEN** `npm run lint` termina con error

### Requirement: Pruebas deterministas
Las pruebas SHALL producir el mismo resultado en cada ejecución, sin depender del azar ni del almacenamiento real del navegador.

#### Scenario: Ejecuciones repetidas
- **WHEN** las pruebas se ejecutan varias veces seguidas sin cambios en el código
- **THEN** el resultado es el mismo en todas

### Requirement: Cobertura de las especificaciones
Las pruebas SHALL verificar, como mínimo: agregar participantes, que el sorteo elige un único ganador, que el ganador es siempre uno de los participantes, que no se puede sortear sin participantes y que el color base azul se aplica a la interfaz.

#### Scenario: Una regla se rompe
- **WHEN** un cambio hace que el ganador pueda no pertenecer a la lista, o que el sorteo sea posible sin participantes
- **THEN** al menos una prueba falla

### Requirement: Verificación en cada push
El repositorio SHALL ejecutar automáticamente el linter y las pruebas en GitHub Actions en cada `push`.

#### Scenario: Push de una rama
- **WHEN** alguien hace `push` de cambios a cualquier rama
- **THEN** GitHub Actions ejecuta el linter y las pruebas

### Requirement: Verificación en cada pull request
El repositorio SHALL ejecutar automáticamente el linter y las pruebas en cada pull request hacia `main`.

#### Scenario: Pull request hacia main
- **WHEN** se abre o actualiza un pull request hacia `main`
- **THEN** GitHub Actions ejecuta el linter y las pruebas y muestra el resultado en el pull request

### Requirement: Fallo visible
El workflow SHALL fallar si el linter o cualquier prueba falla.

#### Scenario: Una prueba falla
- **WHEN** una prueba o el linter fallan en el workflow
- **THEN** el workflow termina en error y el pull request muestra el estado en rojo

### Requirement: Documentación para ejecutar localmente
El `README.md` SHALL explicar cómo ejecutar las pruebas y el linter localmente.

#### Scenario: Desarrollador nuevo
- **WHEN** un desarrollador lee el `README.md`
- **THEN** encuentra los comandos `npm test` y `npm run lint`
