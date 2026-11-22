# Reserva de pistas de pádel / fútbol

## Módulo 1: Catálogo y disponibilidad

- **HU-01 - Consulta de pistas:** Como usuario, quiero explorar el catálogo de pistas filtrando por deporte o nivel para ver las opciones disponibles y su precio base.
  - Se muestra una cuadrícula con nombre, deporte, nivel y descripción de cada pista.
  - El usuario puede filtrar por pádel, fútbol o nivel de juego.
- **HU-02 - Selección de pista y horario:** Como usuario, quiero seleccionar una pista y ver sus horarios disponibles para elegir una fecha, hora y pista con plazas libres.
  - Solo se muestran horarios iguales o posteriores al momento actual.
  - Una pista sin plazas disponibles se deshabilita y se muestra como "Ocupada" o "Sin plazas".

## Módulo 2: Reserva y operación

- **HU-03 - Creación de la reserva:** Como usuario, quiero iniciar una reserva de pista para registrarla con mi usuario y la fecha actual, dejando su estado en "Pendiente".
  - El sistema genera un identificador de reserva en estado "Pendiente".
  - La reserva se vincula al jugador que inicia sesión o completa el formulario.
- **HU-04 - Añadir jugadores:** Como usuario, quiero indicar si será una reserva completa o compartida y cuántos jugadores participarán para calcular el importe total.
  - El número de jugadores no puede superar las plazas disponibles del horario.
  - El precio unitario considera el precio de la pista y la tarifa del jugador.
  - El importe total se recalcula al cambiar jugadores o modalidad.

## Módulo 3: Pago y confirmación

- **HU-05 - Procesamiento del pago:** Como usuario, quiero seleccionar un método de pago y confirmar la reserva para cambiar su estado a "Confirmada".
  - El sistema permite simular el cobro con tarjeta, Bizum o PayPal.
  - Después del pago correcto, registra la fecha y cambia el estado a "Confirmada".
- **HU-06 - Comprobante de pista:** Como usuario, quiero recibir un código localizador o QR al confirmar para presentarlo al llegar al centro deportivo.
  - Se genera un código único vinculado al pago y a la reserva.
  - La confirmación muestra pista, fecha, hora, nivel y localizador.
- **HU-07 - Actualización de plazas:** Como sistema, quiero restar los jugadores o plazas reservadas de la disponibilidad de la pista para evitar solapamientos.
  - Las plazas reservadas dejan de estar disponibles inmediatamente después de confirmar.

## Módulo 4: Usuario e historial

- **HU-08 - Registro de jugador:** Como usuario, quiero registrar nombre, email, teléfono y nivel de juego para obtener mi identificador y reservar pistas.
  - El sistema valida el formato y la ausencia de duplicados en el email.
  - Permite asignar nivel y tarifa como Estándar, Socio o Estudiante.
- **HU-09 - Historial de reservas:** Como usuario, quiero consultar mis reservas deportivas anteriores para revisar su estado, fecha e importe total.
  - Las reservas aparecen ordenadas por fecha de creación, empezando por la más reciente.
  - Una reserva confirmada permite consultar pista, horario y código localizador.
- **HU-10 - Cancelación de pista:** Como usuario, quiero cancelar una reserva confirmada antes del inicio para liberar la pista y sus plazas.
  - El estado cambia a "Cancelada".
  - Las plazas canceladas vuelven a estar disponibles en el horario de la pista.
