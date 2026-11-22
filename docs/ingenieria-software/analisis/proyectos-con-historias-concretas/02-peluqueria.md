# Peluquería / Barbería

## Módulo 1: Catálogo y disponibilidad

- **HU-01 - Consulta de servicios:** Como usuario, quiero explorar el catálogo de servicios de peluquería filtrando por tipo para ver cortes, tintes o arreglos de barba y su precio base.
  - Se muestra una cuadrícula con el nombre, tipo y descripción de cada servicio.
  - El usuario puede filtrar por corte, tinte, barba u otra categoría.
- **HU-02 - Selección de profesional y horario:** Como usuario, quiero seleccionar un servicio y ver los profesionales y tramos disponibles para elegir una fecha, hora y profesional con plazas libres.
  - Solo se muestran citas iguales o posteriores a la fecha actual.
  - Un tramo ocupado se deshabilita y se muestra como "Ocupado" o "Sin plazas".

## Módulo 2: Reserva y operación

- **HU-03 - Creación de la cita:** Como usuario, quiero iniciar una cita para registrar una operación con mi usuario y la fecha actual, dejando su estado en "Pendiente".
  - El sistema genera un identificador de cita en estado "Pendiente".
  - La cita se vincula al cliente que inicia sesión o completa el formulario.
- **HU-04 - Añadir servicios:** Como usuario, quiero indicar los servicios que quiero contratar para calcular su precio según el tipo de tarifa y acumularlos en el importe total.
  - La cantidad de servicios solicitada no puede superar la disponibilidad del profesional en ese tramo.
  - El precio unitario considera el precio base del servicio y la tarifa del cliente.
  - El importe total se recalcula al añadir o eliminar servicios.

## Módulo 3: Pago y confirmación

- **HU-05 - Procesamiento del pago:** Como usuario, quiero seleccionar un método de pago y confirmar la cita para cambiar su estado a "Confirmada".
  - El sistema permite simular el cobro con tarjeta, Bizum o PayPal.
  - Después del pago correcto, registra la fecha y cambia el estado a "Confirmada".
- **HU-06 - Comprobante de cita:** Como usuario, quiero recibir un código localizador o QR al confirmar para presentar la cita en la peluquería.
  - Se genera un código único vinculado al pago y a la cita.
  - La confirmación muestra profesional, servicio, fecha, hora y localizador.
- **HU-07 - Actualización de disponibilidad:** Como sistema, quiero marcar ocupado el tramo horario reservado para impedir que otro usuario reserve la misma cita.
  - El tramo reservado deja de tener disponibilidad después de confirmar la cita.

## Módulo 4: Usuario e historial

- **HU-08 - Registro de cliente:** Como usuario, quiero registrar nombre, email, teléfono y tipo de tarifa para obtener mi identificador y reservar citas.
  - El sistema valida el formato y la ausencia de duplicados en el email.
  - Permite asignar tarifas como Estándar, Estudiante, Senior o Socio.
- **HU-09 - Historial de citas:** Como usuario, quiero consultar mis citas anteriores para revisar su estado, fecha e importe total.
  - Las citas aparecen ordenadas por fecha de creación, empezando por la más reciente.
  - Una cita confirmada permite consultar el servicio, profesional y código localizador.
- **HU-10 - Cancelación de cita:** Como usuario, quiero cancelar una cita confirmada antes de su inicio para liberar el tramo horario reservado.
  - El estado cambia a "Cancelada".
  - El tramo horario vuelve a estar disponible para otro cliente.
