# Clínica veterinaria / Centro médico

## Módulo 1: Catálogo y disponibilidad

- **HU-01 - Consulta de consultas:** Como usuario, quiero explorar el catálogo de especialidades y tipos de consulta filtrando por área para ver las opciones disponibles y su precio base.
  - Se muestra una lista con especialidad, tipo de consulta y descripción.
  - El usuario puede filtrar por especialidad, consulta médica o veterinaria.
- **HU-02 - Selección de profesional y turno:** Como usuario, quiero seleccionar una consulta y ver los turnos disponibles para elegir una fecha, hora y profesional con plazas libres.
  - Solo se muestran turnos iguales o posteriores al momento actual.
  - Un turno sin plazas se deshabilita y se muestra como "Ocupado".

## Módulo 2: Reserva y operación

- **HU-03 - Creación de la cita:** Como usuario, quiero iniciar una cita médica o veterinaria para registrarla con mi usuario y la fecha actual, dejando su estado en "Pendiente".
  - El sistema genera un identificador de cita en estado "Pendiente".
  - La cita se vincula al paciente que inicia sesión o completa el formulario.
- **HU-04 - Añadir consulta y motivo:** Como usuario, quiero indicar la consulta, el motivo de la visita y la cantidad de pacientes si procede para calcular el importe total.
  - La cantidad de pacientes no puede superar las plazas disponibles del turno.
  - El precio unitario considera el precio base de la consulta y la tarifa del paciente.
  - El importe total se recalcula al modificar consulta o cantidad.

## Módulo 3: Pago y confirmación

- **HU-05 - Procesamiento del pago:** Como usuario, quiero seleccionar un método de pago y confirmar la cita para cambiar su estado a "Confirmada".
  - El sistema permite simular el cobro con tarjeta, Bizum o PayPal.
  - Después del pago correcto, registra la fecha y cambia el estado a "Confirmada".
- **HU-06 - Comprobante de cita:** Como usuario, quiero recibir un código localizador o QR al confirmar para presentarlo en recepción.
  - Se genera un código único vinculado al pago y a la cita.
  - La confirmación muestra consulta, profesional, fecha, hora y localizador.
- **HU-07 - Actualización de turnos:** Como sistema, quiero restar la plaza reservada del turno disponible para evitar que dos usuarios reserven la misma cita.
  - El turno reservado deja de tener plazas inmediatamente después de confirmar.

## Módulo 4: Usuario e historial

- **HU-08 - Registro de paciente:** Como usuario, quiero registrar nombre, email, teléfono y tipo de tarifa para obtener mi identificador y pedir citas.
  - El sistema valida el formato y la ausencia de duplicados en el email.
  - Permite asignar tarifas como Estándar, Estudiante, Senior o Socio.
- **HU-09 - Historial de consultas:** Como usuario, quiero consultar mis citas anteriores para revisar su estado, fecha e importe total.
  - Las citas aparecen ordenadas por fecha de creación, empezando por la más reciente.
  - Una cita confirmada permite consultar profesional, motivo y código localizador.
- **HU-10 - Cancelación de cita:** Como usuario, quiero cancelar una cita confirmada antes de su inicio para liberar el turno reservado.
  - El estado cambia a "Cancelada".
  - El turno cancelado vuelve a estar disponible para otro paciente.
