# Préstamo de libros / material escolar

## Módulo 1: Catálogo y disponibilidad

- **HU-01 - Consulta del catálogo:** Como usuario, quiero explorar el catálogo de libros o material escolar filtrando por categoría para ver los ejemplares disponibles y su información.
  - Se muestra una cuadrícula con título, categoría y descripción del ejemplar.
  - El usuario puede filtrar por género literario, asignatura o tipo de material.
- **HU-02 - Selección de ejemplar:** Como usuario, quiero seleccionar un ejemplar y ver sus unidades disponibles para elegir una copia con stock mayor que cero.
  - Solo se muestran ejemplares disponibles en el momento actual.
  - Un ejemplar sin copias disponibles se deshabilita y se muestra como "Agotado".

## Módulo 2: Reserva y operación

- **HU-03 - Creación del préstamo:** Como usuario, quiero iniciar un préstamo para registrarlo con mi usuario y la fecha actual, dejando su estado en "Pendiente".
  - El sistema genera un identificador de préstamo en estado "Pendiente".
  - El préstamo se vincula al estudiante o socio que inicia sesión o completa el formulario.
- **HU-04 - Añadir ejemplares:** Como usuario, quiero indicar la cantidad de ejemplares y la fecha límite de devolución para calcular las cantidades reservadas.
  - La cantidad no puede superar las copias disponibles.
  - El precio o posible penalización considera el tipo de material y la tarifa del usuario.
  - El importe total o deuda acumulada se recalcula al modificar ejemplares.

## Módulo 3: Pago y confirmación

- **HU-05 - Confirmación del préstamo:** Como usuario, quiero confirmar el préstamo y registrar los datos de entrega para cambiar su estado a "Confirmada".
  - El sistema permite seleccionar el método de entrega o recogida.
  - Tras confirmar, registra la fecha y cambia el estado a "Confirmada".
- **HU-06 - Comprobante de préstamo:** Como usuario, quiero recibir un código localizador o QR al confirmar para presentarlo al recoger los ejemplares.
  - Se genera un código único vinculado al préstamo.
  - La confirmación muestra ejemplares, fecha límite y localizador.
- **HU-07 - Actualización de stock:** Como sistema, quiero restar los ejemplares prestados del stock disponible para evitar que se entreguen unidades no disponibles.
  - Las copias prestadas dejan de estar disponibles inmediatamente después de confirmar.

## Módulo 4: Usuario e historial

- **HU-08 - Registro de estudiante o socio:** Como usuario, quiero registrar nombre, email, teléfono y tipo de tarifa para obtener mi identificador y solicitar préstamos.
  - El sistema valida el formato y la ausencia de duplicados en el email.
  - Permite asignar tarifas como Estándar, Estudiante, Senior o Socio.
- **HU-09 - Historial de préstamos:** Como usuario, quiero consultar mis préstamos anteriores para revisar su estado, fecha límite e importe de posibles penalizaciones.
  - Los préstamos aparecen ordenados por fecha de creación, empezando por el más reciente.
  - Un préstamo confirmado permite consultar ejemplares, fecha límite y código localizador.
- **HU-10 - Cancelación del préstamo:** Como usuario, quiero cancelar un préstamo confirmado antes de recoger los ejemplares para devolverlos al catálogo.
  - El estado cambia a "Cancelada".
  - Las copias canceladas vuelven a sumarse al stock disponible.
