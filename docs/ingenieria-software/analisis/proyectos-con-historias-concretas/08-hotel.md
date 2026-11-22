# Reserva en hotel rural / camping

## Módulo 1: Catálogo y disponibilidad

- **HU-01 - Consulta de alojamientos:** Como usuario, quiero explorar el catálogo de habitaciones o parcelas filtrando por tipo para ver las opciones disponibles y su precio base por noche.
  - Se muestra una cuadrícula con nombre, tipo y descripción del alojamiento.
  - El usuario puede filtrar por habitación, parcela o suplemento.
- **HU-02 - Selección de estancia:** Como usuario, quiero seleccionar un alojamiento y ver las fechas disponibles para elegir check-in, check-out y una habitación o parcela libre.
  - Solo se muestran estancias cuya fecha de entrada sea igual o posterior a la actual.
  - Una habitación o parcela sin disponibilidad se deshabilita y se muestra como "Ocupada".

## Módulo 2: Reserva y operación

- **HU-03 - Creación de la reserva:** Como usuario, quiero iniciar una reserva de estancia para registrarla con mi usuario y la fecha actual, dejando su estado en "Pendiente".
  - El sistema genera un identificador de reserva en estado "Pendiente".
  - La reserva se vincula al usuario que inicia sesión o completa el formulario.
- **HU-04 - Añadir noches y suplementos:** Como usuario, quiero indicar la cantidad de noches y los huéspedes o suplementos para calcular el importe total.
  - La estancia no puede superar las habitaciones o parcelas disponibles.
  - El precio unitario considera precio por noche, suplementos y tarifa del huésped.
  - El importe total se recalcula al cambiar fechas, huéspedes o suplementos.

## Módulo 3: Pago y confirmación

- **HU-05 - Procesamiento del pago:** Como usuario, quiero seleccionar un método de pago y confirmar la estancia para cambiar su estado a "Confirmada".
  - El sistema permite simular el cobro con tarjeta, Bizum o PayPal.
  - Después del pago correcto, registra la fecha y cambia el estado a "Confirmada".
- **HU-06 - Comprobante de alojamiento:** Como usuario, quiero recibir un código localizador o QR al pagar para presentarlo en la recepción del hotel o camping.
  - Se genera un código único vinculado al pago y a la reserva.
  - La confirmación muestra alojamiento, check-in, check-out y localizador.
- **HU-07 - Actualización de disponibilidad:** Como sistema, quiero restar las noches reservadas de la disponibilidad de la habitación o parcela para evitar reservas duplicadas.
  - Las fechas reservadas dejan de estar disponibles inmediatamente después de confirmar.

## Módulo 4: Usuario e historial

- **HU-08 - Registro de huésped:** Como usuario, quiero registrar nombre, email, teléfono y tipo de tarifa para obtener mi identificador y reservar estancias.
  - El sistema valida el formato y la ausencia de duplicados en el email.
  - Permite asignar tarifas como Estándar, Estudiante, Senior o Socio.
- **HU-09 - Historial de reservas:** Como usuario, quiero consultar mis estancias anteriores para revisar su estado, fechas e importe total.
  - Las reservas aparecen ordenadas por fecha de creación, empezando por la más reciente.
  - Una reserva confirmada permite consultar alojamiento, fechas y código localizador.
- **HU-10 - Cancelación de estancia:** Como usuario, quiero cancelar una reserva confirmada antes del check-in para liberar la habitación o parcela.
  - El estado cambia a "Cancelada".
  - Las fechas canceladas vuelven a estar disponibles en el alojamiento.
