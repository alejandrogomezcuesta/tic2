# Reserva de clases en gimnasio

## Módulo 1: Catálogo y disponibilidad

- **HU-01 - Consulta de clases:** Como usuario, quiero explorar el catálogo de clases dirigidas filtrando por modalidad para ver Spinning, Yoga o Crossfit y su precio base.
  - Se muestra una cuadrícula con nombre, modalidad y descripción de cada clase.
  - El usuario puede filtrar por Spinning, Yoga, Crossfit u otra modalidad.
- **HU-02 - Selección de clase y horario:** Como usuario, quiero seleccionar una clase y ver sus sesiones disponibles para elegir una fecha, hora y sala con plazas libres.
  - Solo se muestran sesiones iguales o posteriores al momento actual.
  - Una sesión sin plazas se deshabilita y se muestra como "Completa".

## Módulo 2: Reserva y operación

- **HU-03 - Creación de la reserva:** Como usuario, quiero iniciar la reserva de una clase para registrarla con mi usuario y la fecha actual, dejando su estado en "Pendiente".
  - El sistema genera un identificador de reserva en estado "Pendiente".
  - La reserva se vincula al socio que inicia sesión o completa el formulario.
- **HU-04 - Añadir plazas:** Como usuario, quiero indicar el número de plazas necesarias para calcular el precio según el tipo de tarifa y acumular el importe total.
  - El número de plazas no puede superar el aforo disponible de la sesión.
  - El precio unitario considera el precio de la clase y la tarifa del socio.
  - El importe total se recalcula al cambiar plazas o tarifas.

## Módulo 3: Pago y confirmación

- **HU-05 - Procesamiento del pago:** Como usuario, quiero seleccionar un método de pago y confirmar la reserva para cambiar su estado a "Confirmada".
  - El sistema permite simular el cobro con tarjeta, Bizum o PayPal.
  - Después del pago correcto, registra la fecha y cambia el estado a "Confirmada".
- **HU-06 - Comprobante de clase:** Como usuario, quiero recibir un código localizador o QR al confirmar para presentarlo al entrar en la sala.
  - Se genera un código único vinculado al pago y a la reserva.
  - La confirmación muestra clase, horario, sala y localizador.
- **HU-07 - Actualización de aforo:** Como sistema, quiero restar las plazas reservadas del aforo disponible de la clase para gestionar la lista de espera.
  - Las plazas confirmadas dejan de estar disponibles inmediatamente después del pago.

## Módulo 4: Usuario e historial

- **HU-08 - Registro de socio:** Como usuario, quiero registrar nombre, email, teléfono y tipo de tarifa para obtener mi identificador y reservar clases.
  - El sistema valida el formato y la ausencia de duplicados en el email.
  - Permite asignar tarifas como Estándar, Estudiante, Senior o Socio.
- **HU-09 - Historial de reservas:** Como usuario, quiero consultar mis reservas de clases anteriores para revisar su estado, fecha e importe total.
  - Las reservas aparecen ordenadas por fecha de creación, empezando por la más reciente.
  - Una reserva confirmada permite consultar clase, horario y código localizador.
- **HU-10 - Cancelación de clase:** Como usuario, quiero cancelar una reserva confirmada antes del inicio para liberar la plaza reservada.
  - El estado cambia a "Cancelada".
  - La plaza cancelada vuelve a estar disponible en la sesión.
