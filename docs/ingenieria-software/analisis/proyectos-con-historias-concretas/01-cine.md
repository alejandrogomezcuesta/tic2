# Venta de entradas de cine

Este backlog convierte las historias genéricas en historias concretas para una aplicación de venta de entradas de cine.

## Módulo 1: Catálogo y disponibilidad

- **HU-01 - Consulta de películas:** Como usuario, quiero explorar el catálogo de películas filtrando por género para ver las opciones disponibles y su precio base.
  - Se muestra una lista o cuadrícula con título, género y descripción de cada película.
  - El usuario puede filtrar las películas por género o categoría.
- **HU-02 - Selección de pase y asiento:** Como usuario, quiero seleccionar una película y ver sus pases disponibles para elegir una fecha y hora, una sala y un asiento con plazas disponibles.
  - Solo se muestran los pases cuya fecha y hora sean iguales o posteriores a la actual.
  - Los butacas sin plazas disponibles se muestran como "Agotado" y no pueden seleccionarse.

## Módulo 2: Reserva y operación

- **HU-03 - Creación de la compra:** Como usuario, quiero iniciar la compra de mis entradas para registrar una transacción con mi usuario y la fecha actual, dejando su estado en "Pendiente".
  - El sistema genera un identificador de compra en estado "Pendiente".
  - La compra se vincula al usuario que ha iniciado sesión o completado el formulario.
- **HU-04 - Añadir entradas:** Como usuario, quiero indicar la cantidad de entradas y los asientos seleccionados para calcular el precio según el tipo de tarifa y acumularlos en el importe total.
  - La cantidad de entradas no puede superar las butacas disponibles del pase.
  - El precio unitario considera el precio base de la entrada y la tarifa del usuario.
  - El importe total se recalcula al añadir o eliminar entradas.

## Módulo 3: Pago y confirmación

- **HU-05 - Procesamiento del pago:** Como usuario, quiero seleccionar un método de pago y confirmar la compra para cambiar su estado a "Confirmada".
  - El sistema permite simular el cobro con tarjeta, Bizum o PayPal.
  - Después de un pago correcto, registra la fecha de pago y cambia el estado de "Pendiente" a "Confirmada".
- **HU-06 - Código QR del ticket:** Como usuario, quiero recibir un código localizador o QR al pagar para presentar el ticket al entrar en la sala.
  - Se genera un código único vinculado al pago y a la compra.
  - La confirmación muestra el resumen de la película, el pase, las butacas y el localizador.
- **HU-07 - Actualización de butacas:** Como sistema, quiero restar las entradas compradas de las plazas disponibles para evitar que se vuelva a vender el mismo asiento.
  - Después de confirmar la compra, las butacas reservadas dejan de estar disponibles para otros usuarios.

## Módulo 4: Usuario e historial

- **HU-08 - Registro de espectador:** Como usuario, quiero registrar nombre, email, teléfono y tipo de tarifa para obtener mi identificador y comprar entradas.
  - El sistema valida que el email tenga formato correcto y no esté registrado.
  - Permite asignar una tarifa como Estándar, Estudiante o Senior.
- **HU-09 - Historial de compras:** Como usuario, quiero consultar mis entradas y operaciones anteriores para revisar su estado, fecha e importe total.
  - Las compras del usuario aparecen ordenadas por fecha de creación, empezando por la más reciente.
  - Una compra confirmada permite consultar sus entradas y código QR.
- **HU-10 - Cancelación de entradas:** Como usuario, quiero cancelar una compra confirmada antes del pase para liberar las butacas reservadas.
  - El estado de la compra cambia a "Cancelada".
  - Las butacas canceladas vuelven a estar disponibles en el pase correspondiente.
