"Panel de Administración para una Empresa de Gestión de Eventos"

Descripción general:
Panel de administración de gestión de eventos (crearlos, editarlos, eliminarlos), ver las estadísticas de asistencia y validar formularios de usuarios (clientes).

Requisitos:

- Habrá 3 páginas:
  - Home con enlace a las otras páginas
  - Eventos y su gestión:
    - Eventos
    - Formulario de crear
- Formularios: Implementa formularios con validación HTML (validación nativa) y Zod.
- Diseño responsive
- Utiliza arquitectura BEM
- Implementa PostCSS
- Usa React Query para las llamadas a la API

5. Testing:
   Tests unitarios: Implementa tests unitarios utilizando Jest o Vitest para componentes individuales.
   Tests de integración: Usa React Testing Library junto con Vitest o Jest para realizar tests de integración, como pruebas de validación de formularios y gestión de estado con React Query.

6. Librerías de Componentes:
   Material UI: Usa Material UI para construir componentes reutilizables como botones, inputs de formularios, cuadros de diálogo de confirmación para eliminar eventos, etc.

Bonus (opcional):
Me falta: - Opciones de editar o eliminar eventos - Testing - Cuando se añada un evento, que se añada tambien en el archivo de events.json
