# Venta de billetes de autobús / tren

## Módulo 1: Catálogo y disponibilidad

- **HU-01 - Consulta de rutas:** Como usuario, quiero explorar el catálogo de rutas filtrando por origen y destino para ver los viajes disponibles y su precio base.
  - Se muestra una lista con ruta, origen, destino y descripción de cada viaje.
  - El usuario puede filtrar por origen, destino o tipo de transporte.
- **HU-02 - Selección de viaje y asiento:** Como usuario, quiero seleccionar una ruta y ver sus viajes disponibles para elegir fecha, hora, tren o autobús y asiento con plazas libres.
  - Solo se muestran salidas iguales o posteriores a la fecha actual.
  - Los asientos sin plazas disponibles se deshabilitan y muestran "Ocupado" o "Agotado".

## Módulo 2: Reserva y operación

- **HU-03 - Creación de la reserva:** Como usuario, quiero iniciar la compra de billetes para registrarla con mi usuario y la fecha actual, dejando su estado en "Pendiente".
  - El sistema genera un identificador de reserva en estado "Pendiente".
  - La reserva se vincula al usuario que inicia sesión o completa el formulario.
- **HU-04 - Añadir viajeros y billetes:** Como usuario, quiero indicar la cantidad de billetes y aplicar descuentos como el carné joven para calcular el importe total.
  - La cantidad no puede superar las plazas disponibles del viaje.
  - El precio unitario considera el precio del trayecto y descuentos como el carné joven.
  - El importe total se recalcula al cambiar billetes o tarifas.

## Módulo 3: Pago y confirmación

- **HU-05 - Procesamiento del pago:** Como usuario, quiero seleccionar un método de pago y confirmar la compra para cambiar su estado a "Confirmada".
  - El sistema permite simular el cobro con tarjeta, Bizum o PayPal.
  - Después del pago correcto, registra la fecha y cambia el estado a "Confirmada".
- **HU-06 - Código QR del billete:** Como usuario, quiero recibir un código localizador o QR al pagar para presentar el billete durante el viaje.
  - Se genera un código único vinculado al pago y a la reserva.
  - La confirmación muestra ruta, salida, asiento y localizador.
- **HU-07 - Actualización de plazas:** Como sistema, quiero restar los billetes vendidos de las plazas disponibles del viaje para evitar sobreventas.
  - Las plazas confirmadas dejan de estar disponibles inmediatamente después del pago.

## Módulo 4: Usuario e historial

- **HU-08 - Registro de viajero:** Como usuario, quiero registrar nombre, email, teléfono y tipo de tarifa para obtener mi identificador y comprar billetes.
  - El sistema valida el formato y la ausencia de duplicados en el email.
  - Permite asignar tarifas como Estándar, Estudiante, Senior o Socio.
- **HU-09 - Historial de viajes:** Como usuario, quiero consultar mis reservas de autobús o tren para revisar su estado, fecha e importe total.
  - Las reservas aparecen ordenadas por fecha de creación, empezando por la más reciente.
  - Una reserva confirmada permite consultar la ruta, los asientos y el código QR.
- **HU-10 - Cancelación del billete:** Como usuario, quiero cancelar una reserva confirmada antes de la salida para liberar las plazas reservadas.
  - El estado cambia a "Cancelada".
  - Las plazas canceladas vuelven a estar disponibles en el viaje.
