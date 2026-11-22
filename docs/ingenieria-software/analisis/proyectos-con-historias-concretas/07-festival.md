# Entradas para festivales de música

## Módulo 1: Catálogo y disponibilidad

- **HU-01 - Consulta de pases:** Como usuario, quiero explorar el catálogo de pases filtrando por día o escenario para ver pases General o VIP, su disponibilidad y precio base.
  - Se muestra una cuadrícula con tipo de pase, día, escenario y descripción.
  - El usuario puede filtrar por General, VIP, día o escenario.
- **HU-02 - Selección de pase y fecha:** Como usuario, quiero seleccionar un pase y ver sus sesiones disponibles para elegir una fecha, escenario y tipo de entrada con aforo libre.
  - Solo se muestran sesiones iguales o posteriores al momento actual.
  - Un tipo de entrada sin aforo se deshabilita y se muestra como "Agotado".

## Módulo 2: Reserva y operación

- **HU-03 - Creación de la compra:** Como usuario, quiero iniciar la compra de entradas para registrarla con mi usuario y la fecha actual, dejando su estado en "Pendiente".
  - El sistema genera un identificador de compra en estado "Pendiente".
  - La compra se vincula al usuario que inicia sesión o completa el formulario.
- **HU-04 - Añadir entradas:** Como usuario, quiero indicar la cantidad de entradas General o VIP para calcular el precio según el tramo y acumular el importe total.
  - La cantidad no puede superar el aforo disponible de la sesión.
  - El precio unitario considera el tipo de pase, el tramo de precio y la tarifa del usuario.
  - El importe total se recalcula al añadir o eliminar entradas.

## Módulo 3: Pago y confirmación

- **HU-05 - Procesamiento del pago:** Como usuario, quiero seleccionar un método de pago y confirmar la compra para cambiar su estado a "Confirmada".
  - El sistema permite simular el cobro con tarjeta, Bizum o PayPal.
  - Después del pago correcto, registra la fecha y cambia el estado a "Confirmada".
- **HU-06 - Código QR del festival:** Como usuario, quiero recibir un código localizador o QR al pagar para presentarlo en el control de acceso.
  - Se genera un código único vinculado al pago y a la compra.
  - La confirmación muestra pase, fecha, escenario y localizador.
- **HU-07 - Actualización de aforo:** Como sistema, quiero restar las entradas vendidas del aforo disponible para evitar sobrepasar la capacidad del festival.
  - El aforo disponible disminuye inmediatamente según la cantidad confirmada.

## Módulo 4: Usuario e historial

- **HU-08 - Registro de asistente:** Como usuario, quiero registrar nombre, email, teléfono y tipo de tarifa para obtener mi identificador y comprar pases.
  - El sistema valida el formato y la ausencia de duplicados en el email.
  - Permite asignar tarifas como Estándar, Estudiante, Senior o Socio.
- **HU-09 - Historial de entradas:** Como usuario, quiero consultar mis compras de entradas para revisar su estado, fecha e importe total.
  - Las compras aparecen ordenadas por fecha de creación, empezando por la más reciente.
  - Una compra confirmada permite consultar entradas, escenario y código QR.
- **HU-10 - Cancelación de entradas:** Como usuario, quiero cancelar una compra confirmada antes del festival para liberar las plazas reservadas.
  - El estado cambia a "Cancelada".
  - Las entradas canceladas vuelven a añadirse al aforo disponible.
