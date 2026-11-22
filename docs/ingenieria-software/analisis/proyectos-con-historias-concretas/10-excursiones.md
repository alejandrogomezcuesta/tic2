# Tours y excursiones turísticas

## Módulo 1: Catálogo y disponibilidad

- **HU-01 - Consulta de excursiones:** Como usuario, quiero explorar el catálogo de rutas y visitas filtrando por idioma o tipo para ver las excursiones disponibles y su precio base.
  - Se muestra una cuadrícula con ruta, idioma, descripción y precio base.
  - El usuario puede filtrar por ruta, idioma o tipo de visita.
- **HU-02 - Selección de franja y asistentes:** Como usuario, quiero seleccionar una excursión y ver sus horarios disponibles para elegir una fecha, hora e idioma con plazas libres.
  - Solo se muestran excursiones iguales o posteriores al momento actual.
  - Una franja sin plazas se deshabilita y se muestra como "Agotada".

## Módulo 2: Reserva y operación

- **HU-03 - Creación de la reserva:** Como usuario, quiero iniciar la reserva de una excursión para registrarla con mi usuario y la fecha actual, dejando su estado en "Pendiente".
  - El sistema genera un identificador de reserva en estado "Pendiente".
  - La reserva se vincula al participante que inicia sesión o completa el formulario.
- **HU-04 - Añadir asistentes:** Como usuario, quiero indicar el número de asistentes y sus tarifas para calcular el importe total.
  - El número de asistentes no puede superar las plazas disponibles.
  - El precio unitario considera el precio del tour, idioma y tarifa del participante.
  - El importe total se recalcula al cambiar asistentes o tarifas.

## Módulo 3: Pago y confirmación

- **HU-05 - Procesamiento del pago:** Como usuario, quiero seleccionar un método de pago y confirmar la excursión para cambiar su estado a "Confirmada".
  - El sistema permite simular el cobro con tarjeta, Bizum o PayPal.
  - Después del pago correcto, registra la fecha y cambia el estado a "Confirmada".
- **HU-06 - Código QR del tour:** Como usuario, quiero recibir un código localizador o QR al pagar para presentarlo al comenzar la visita.
  - Se genera un código único vinculado al pago y a la reserva.
  - La confirmación muestra excursión, idioma, fecha, hora y localizador.
- **HU-07 - Actualización de plazas:** Como sistema, quiero restar el número de asistentes de las plazas disponibles de la excursión para evitar sobreaforo.
  - Las plazas confirmadas dejan de estar disponibles inmediatamente después del pago.

## Módulo 4: Usuario e historial

- **HU-08 - Registro de participante:** Como usuario, quiero registrar nombre, email, teléfono y tipo de tarifa para obtener mi identificador y reservar excursiones.
  - El sistema valida el formato y la ausencia de duplicados en el email.
  - Permite asignar tarifas como Estándar, Estudiante, Senior o Socio.
- **HU-09 - Historial de tours:** Como usuario, quiero consultar mis excursiones anteriores para revisar su estado, fecha e importe total.
  - Las reservas aparecen ordenadas por fecha de creación, empezando por la más reciente.
  - Una reserva confirmada permite consultar ruta, asistentes y código QR.
- **HU-10 - Cancelación de excursión:** Como usuario, quiero cancelar una reserva confirmada antes del inicio para liberar las plazas reservadas.
  - El estado cambia a "Cancelada".
  - Las plazas canceladas vuelven a estar disponibles en la excursión.
