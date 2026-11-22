# Pizzería / Restaurante local

## Módulo 1: Catálogo y disponibilidad

- **HU-01 - Consulta del menú:** Como usuario, quiero explorar el catálogo de platos y pizzas filtrando por categoría para ver opciones disponibles y su precio base.
  - Se muestra una cuadrícula con nombre, categoría y descripción del plato o pizza.
  - El usuario puede filtrar por pizzas, platos, bebidas u otras categorías.
- **HU-02 - Selección del turno de pedido:** Como usuario, quiero seleccionar un plato o pizza y ver los turnos disponibles para elegir la hora de recogida o reparto y comprobar su disponibilidad.
  - Solo se muestran turnos iguales o posteriores al momento actual.
  - Un turno sin stock o capacidad disponible se deshabilita y se muestra como "Agotado".

## Módulo 2: Reserva y operación

- **HU-03 - Creación del pedido:** Como usuario, quiero iniciar un pedido para registrarlo con mi usuario y la fecha actual, dejando su estado en "Pendiente".
  - El sistema genera un identificador de pedido en estado "Pendiente".
  - El pedido se vincula al usuario que inicia sesión o completa el formulario.
- **HU-04 - Añadir platos o pizzas:** Como usuario, quiero indicar la cantidad y personalizar ingredientes para calcular el precio, aplicando el tipo de tarifa y acumular el importe total.
  - La cantidad no puede superar el stock disponible del plato o pizza.
  - El precio unitario considera el precio base, los ingredientes adicionales y la tarifa del usuario.
  - El importe total se recalcula al modificar cantidades o ingredientes.

## Módulo 3: Pago y confirmación

- **HU-05 - Procesamiento del pago:** Como usuario, quiero seleccionar un método de pago y confirmar el pedido para cambiar su estado a "Confirmada".
  - El sistema permite simular el cobro con tarjeta, Bizum o PayPal.
  - Después del pago correcto, registra la fecha y cambia el estado a "Confirmada".
- **HU-06 - Código de recogida o entrega:** Como usuario, quiero recibir un código localizador o QR al pagar para utilizarlo en la recogida o entrega.
  - Se genera un código único vinculado al pago y al pedido.
  - La confirmación muestra el pedido, turnos de recogida o reparto y localizador.
- **HU-07 - Actualización de disponibilidad:** Como sistema, quiero restar la cantidad preparada del stock disponible una vez confirmado el pedido.
  - El stock disponible disminuye inmediatamente según la cantidad pedida.

## Módulo 4: Usuario e historial

- **HU-08 - Registro de cliente:** Como usuario, quiero registrar nombre, email, teléfono y tipo de tarifa para obtener mi identificador y realizar pedidos.
  - El sistema valida el formato y la ausencia de duplicados en el email.
  - Permite asignar una tarifa como Estándar, Estudiante, Senior o Socio.
- **HU-09 - Historial de pedidos:** Como usuario, quiero consultar mis pedidos anteriores para revisar su estado, fecha e importe total.
  - Los pedidos aparecen ordenados por fecha de creación, empezando por el más reciente.
  - Un pedido confirmado permite consultar el detalle y el código localizador.
- **HU-10 - Cancelación del pedido:** Como usuario, quiero cancelar un pedido confirmado antes del turno seleccionado para liberar la reserva y restituir el stock.
  - El estado cambia a "Cancelada".
  - Las unidades canceladas vuelven a añadirse al stock disponible.
