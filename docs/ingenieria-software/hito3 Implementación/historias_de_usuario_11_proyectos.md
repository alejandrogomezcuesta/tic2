# 📋 Adaptación Concreta de Historias de Usuario por Proyecto

Este documento detalla la adaptación específica de las **10 Historias de Usuario genéricas (HU-01 a HU-10)** para cada uno de los **11 proyectos** propuestos en el curso.

---

## 🎬 1. Venta de Entradas de Cine

### Módulo 1: Catálogo y Disponibilidad
* **HU-01 (Consulta de Películas):** Como **espectador**, quiero consultar la cartelera filtrando por género (Acción, Drama, Comedia) para ver los títulos disponibles, sinopsis y precio base de la entrada.
* **HU-02 (Selección de Sesión y Sala):** Como **espectador**, quiero seleccionar una película y ver las sesiones disponibles con sus horas de proyección y número de sala para elegir una función con butacas libres.

### Módulo 2: Reserva y Operación
* **HU-03 (Creación de Reserva de Entradas):** Como **espectador**, quiero iniciar la compra de entradas asignada a mi usuario y fecha actual para registrar la solicitud en estado "Pendiente".
* **HU-04 (Selección de Butacas y Descuento):** Como **espectador**, quiero seleccionar el número de entradas e indicar mi tipo de tarifa (General, Día del Espectador, Carné Joven) para calcular el importe total.

### Módulo 3: Pago y Confirmación
* **HU-05 (Procesamiento del Pago):** Como **espectador**, quiero pagar las entradas mediante Tarjeta o Bizum para confirmar la compra de la función.
* **HU-06 (Generación de Entrada QR):** Como **espectador**, quiero recibir un código QR localizador tras completar el pago para presentarlo en el control de acceso de la sala.
* **HU-07 (Actualización de Aforo):** Como **sistema**, quiero descontar las entradas vendidas del aforo total de la sala para evitar la sobreventa de localidades.

### Módulo 4: Usuario y Mi Cuenta
* **HU-08 (Registro de Espectador):** Como **espectador**, quiero registrar mis datos personales (nombre, email, teléfono, tipo de tarifa) para acelerar el proceso de compras futuras.
* **HU-09 (Historial de Entradas):** Como **espectador**, quiero consultar el historial de entradas compradas anteriormente para recuperar el código QR o revisar detalles de la función.
* **HU-10 (Cancelación de Entrada):** Como **espectador**, quiero cancelar una compra antes del inicio de la película para liberar las butacas de la sesión.

---

## ✂️ 2. Peluquería / Barbería

### Módulo 1: Catálogo y Disponibilidad
* **HU-01 (Consulta de Tratamientos):** Como **cliente**, quiero consultar la lista de servicios (Corte, Tinte, Barba, Peinado) para ver la duración estimada y precio base de cada uno.
* **HU-02 (Selección de Profesional y Hora):** Como **cliente**, quiero elegir un tratamiento y un estilista para ver los tramos horarios libres en su agenda del día.

### Módulo 2: Reserva y Operación
* **HU-03 (Creación de Cita):** Como **cliente**, quiero solicitar una cita previa registrando la petición con la fecha actual en estado "Pendiente".
* **HU-04 (Añadir Tratamientos Adicionales):** Como **cliente**, quiero añadir servicios extra (lavado, mascarilla) a la cita para que se recalcule el precio final estimado.

### Módulo 3: Pago y Confirmación
* **HU-05 (Confirmación de Cita):** Como **cliente**, quiero seleccionar el modo de pago (en local o anticipado) para dejar la cita confirmada en el calendario del salón.
* **HU-06 (Generación de Comprobante):** Como **cliente**, quiero recibir un código localizador y resumen del servicio para mostrarlo al llegar a la peluquería.
* **HU-07 (Bloqueo de Agenda):** Como **sistema**, quiero marcar como ocupado el intervalo horario del estilista para evitar superposición de citas.

### Módulo 4: Usuario y Mi Cuenta
* **HU-08 (Registro de Cliente):** Como **cliente**, quiero crear un perfil con mis datos de contacto y preferencia de estilo para facilitar las reservas semanales o mensuales.
* **HU-09 (Historial de Visitas):** Como **cliente**, quiero consultar el registro de mis citas pasadas para recordar qué tratamientos o profesionales elegí previamente.
* **HU-10 (Anulación de Cita):** Como **cliente**, quiero anular mi cita con suficiente antelación para dejar libre el hueco en la agenda del profesional.

---

## 🍕 3. Pizzería / Restaurante Local

### Módulo 1: Catálogo y Disponibilidad
* **HU-01 (Consulta de Menú):** Como **cliente**, quiero explorar la carta dividida en categorías (Pizzas, Entrantes, Bebidas, Postres) consultando ingredientes y precio base.
* **HU-02 (Selección de Turno de Entrega):** Como **cliente**, quiero indicar la franja horaria deseada para recogida o reparto a domicilio y verificar la disponibilidad de la cocina.

### Módulo 2: Reserva y Operación
* **HU-03 (Creación de Comanda):** Como **cliente**, quiero iniciar un pedido vinculado a mi usuario y fecha/hora actual en estado "Pendiente".
* **HU-04 (Personalización de Pizzas):** Como **cliente**, quiero seleccionar unidades e ingredientes extra para calcular el importe total acumulado en el carrito.

### Módulo 3: Pago y Confirmación
* **HU-05 (Pago del Pedido):** Como **cliente**, quiero seleccionar un método de pago (Tarjeta, Bizum, Efectivo) para procesar el pedido y enviarlo a cocina.
* **HU-06 (Generación de Ticket de Seguimiento):** Como **cliente**, quiero recibir un número de ticket/localizador con el resumen del pedido para hacer seguimiento.
* **HU-07 (Control de Capacidad de Horno):** Como **sistema**, quiero limitar el número de pizzas/pedidos permitidos por franja de 15 minutos para evitar retrasos en el servicio.

### Módulo 4: Usuario y Mi Cuenta
* **HU-08 (Registro de Cliente):** Como **cliente**, quiero guardar mi dirección postal y datos de contacto para no tener que introducirlos en cada pedido a domicilio.
* **HU-09 (Historial de Comandas):** Como **cliente**, quiero revisar mis pedidos pasados para consultar el desglose e importe de compras previas.
* **HU-10 (Cancelación de Comanda):** Como **cliente**, quiero cancelar un pedido dentro de los primeros minutos antes de que empiece la fase de elaboración.

---

## 🚌 4. Venta de Billetes de Autobús / Tren

### Módulo 1: Catálogo y Disponibilidad
* **HU-01 (Consulta de Rutas):** Como **pasajero**, quiero seleccionar el origen y destino para consultar los trayectos disponibles y el precio base del billete.
* **HU-02 (Selección de Salida y Asiento):** Como **pasajero**, quiero elegir una fecha y horario de salida para ver la distribución del autobús/tren y las plazas libres.

### Módulo 2: Reserva y Operación
* **HU-03 (Creación de Solicitud de Pasaje):** Como **pasajero**, quiero iniciar el proceso de compra de billetes para mi trayecto en estado "Pendiente".
* **HU-04 (Selección de Plazas y Descuentos):** Como **pasajero**, quiero seleccionar el número de viajeros y aplicar tarifas especiales (Familia Numerosa, Carné Joven) para calcular el total.

### Módulo 3: Pago y Confirmación
* **HU-05 (Pago de Billetes):** Como **pasajero**, quiero pagar el importe mediante pasarela segura para confirmar la reserva de los asientos elegidos.
* **HU-06 (Generación de Billete QR):** Como **pasajero**, quiero obtener mi billete digital con código QR para mostrarlo al conductor o torno antes de embarcar.
* **HU-07 (Actualización de Asientos Libres):** Como **sistema**, quiero restar en tiempo real los asientos vendidos del total del vehículo para evitar la duplicidad de plazas.

### Módulo 4: Usuario y Mi Cuenta
* **HU-08 (Registro de Pasajero):** Como **pasajero**, quiero registrar mi documento de identidad (DNI/NIE) y datos personales para agilizar la compra de billetes nominativos.
* **HU-09 (Mis Billetes):** Como **pasajero**, quiero acceder a mi panel para descargar o visualizar cualquier billete comprado activo o pasado.
* **HU-10 (Anulación de Billete):** Como **pasajero**, quiero cancelar mi billete antes de la salida programada para liberar el asiento y solicitar la devolución según la política.

---

## 🎾 5. Reserva de Pistas de Pádel / Club Deportivo

### Módulo 1: Catálogo y Disponibilidad
* **HU-01 (Consulta de Pistas):** Como **jugador**, quiero explorar las pistas del club (Cristal, Muro, Cubierta) para ver sus características y precio por hora.
* **HU-02 (Selección de Horario de Juego):** Como **jugador**, quiero consultar el cuadrante del día para seleccionar un tramo disponible de 90 minutos en la pista deseada.

### Módulo 2: Reserva y Operación
* **HU-03 (Creación de Reserva de Pista):** Como **jugador**, quiero bloquear una pista en una hora concreta en estado "Pendiente" mientras completo los datos.
* **HU-04 (Añadir Extras de Instalación):** Como **jugador**, quiero indicar si necesito suplementos como iluminación nocturna o alquiler de palas para agregarlos al importe.

### Módulo 3: Pago y Confirmación
* **HU-05 (Pago de la Reserva):** Como **jugador**, quiero realizar el pago mediante monedero del club o tarjeta para dejar la pista confirmada.
* **HU-06 (Generación de Código de Acceso):** Como **jugador**, quiero recibir un código QR/PIN localizador para encender las luces o abrir la puerta de la pista.
* **HU-07 (Bloqueo de Cuadrante):** Como **sistema**, quiero marcar como no disponible la pista en esa franja horaria para que ningún otro socio pueda reservarla.

### Módulo 4: Usuario y Mi Cuenta
* **HU-08 (Registro de Jugador):** Como **jugador**, quiero crear mi perfil especificando mi nivel de juego y tipo de abonado para beneficiarme de tarifas de socio.
* **HU-09 (Historial de Partidos):** Como **jugador**, quiero ver el registro de mis reservas pasadas para revisar fechas, costes y frecuencia de juego.
* **HU-10 (Cancelación de Pista):** Como **jugador**, quiero anular mi reserva con al menos 24 horas de antelación para liberar la pista y recuperar el saldo.

---

## 🩺 6. Clínica Veterinaria / Centro Médico

### Módulo 1: Catálogo y Disponibilidad
* **HU-01 (Consulta de Consultas / Especialidades):** Como **paciente/propietario**, quiero revisar los servicios médicos (Consulta General, Vacunación, Cirugía) y conocer su tarifa base.
* **HU-02 (Selección de Facultativo y Turno):** Como **paciente/propietario**, quiero elegir un profesional médico/veterinario para consultar las horas libres disponibles en su agenda.

### Módulo 2: Reserva y Operación
* **HU-03 (Creación de Solicitud de Cita):** Como **paciente/propietario**, quiero solicitar una consulta anotándola en el sistema en estado "Pendiente de Confirmación".
* **HU-04 (Detalle de Motivo y Pruebas):** Como **paciente/propietario**, quiero indicar el motivo de la visita y si requiere pruebas adicionales para calcular el importe estimado.

### Módulo 3: Pago y Confirmación
* **HU-05 (Confirmación de Cita):** Como **paciente/propietario**, quiero introducir mis datos de asegurado o pago para dejar confirmada la cita médica.
* **HU-06 (Generación de Comprobante de Consulta):** Como **paciente/propietario**, quiero recibir un número de localizador con el box/sala asignado e instrucciones previas.
* **HU-07 (Reserva de Agenda Médica):** Como **sistema**, quiero descontar el tiempo de la consulta de la disponibilidad del médico para impedir citas concurrentes.

### Módulo 4: Usuario y Mi Cuenta
* **HU-08 (Ficha de Usuario / Paciente):** Como **paciente/propietario**, quiero registrar mis datos e historial básico para vincular cada cita a mi expediente.
* **HU-09 (Historial de Consultas):** Como **paciente/propietario**, quiero consultar la lista de visitas pasadas con sus fechas y servicios recibidos.
* **HU-10 (Cancelación de Cita Médica):** Como **paciente/propietario**, quiero anular una cita médica si no puedo acudir para que el turno quede libre para otro paciente.

---

## 🎸 7. Entradas para Festivales de Música

### Módulo 1: Catálogo y Disponibilidad
* **HU-01 (Consulta de Cartel y Pases):** Como **asistente**, quiero explorar los artistas por día y las modalidades de entrada (General, VIP, Abono Completo) con sus precios.
* **HU-02 (Selección de Días y Escenarios):** Como **asistente**, quiero comprobar la disponibilidad de entradas según la jornada del festival a la que desee acudir.

### Módulo 2: Reserva y Operación
* **HU-03 (Creación de Reserva de Abonos):** Como **asistente**, quiero iniciar el proceso de compra reteniendo los abonos en estado "Pendiente" durante un tiempo determinado.
* **HU-04 (Selección de Extras de Festival):** Como **asistente**, quiero añadir suplementos (Zona de Camping, Bus Lanzadera, Promo Comida) para calcular el total.

### Módulo 3: Pago y Confirmación
* **HU-05 (Pago de Entradas):** Como **asistente**, quiero realizar el pago mediante tarjeta de crédito para validar la compra de mis abonos.
* **HU-06 (Generación de Entrada Nominativa QR):** Como **asistente**, quiero recibir un bono con código QR nominativo para canjear por la pulsera de acceso.
* **HU-07 (Control de Tramos de Aforo):** Como **sistema**, quiero descontar del inventario las entradas vendidas e incrementar el precio al cambiar de tramo de venta.

### Módulo 4: Usuario y Mi Cuenta
* **HU-08 (Registro de Asistente):** Como **asistente**, quiero registrar mis datos personales y fecha de nacimiento para verificar la mayoría de edad exigida en el recito.
* **HU-09 (Mis Abonos):** Como **asistente**, quiero acceder a mi panel personal para consultar mis abonos y cambiar el nombre de los asistentes si fuese necesario.
* **HU-10 (Cancelación / Cesión de Entrada):** Como **asistente**, quiero solicitar la devolución o anulación de un abono dentro del periodo permitido según las condiciones.

---

## 🏨 8. Reserva en Hotel Rural / Camping

### Módulo 1: Catálogo y Disponibilidad
* **HU-01 (Consulta de Alojamientos):** Como **huésped**, quiero revisar las opciones de estancia (Habitación Doble, Cabaña, Parcela) con sus fotos, prestaciones y tarifa por noche.
* **HU-02 (Selección de Fechas de Estancia):** Como **huésped**, quiero introducir la fecha de llegada (*check-in*) y salida (*check-out*) para comprobar la disponibilidad de habitaciones.

### Módulo 2: Reserva y Operación
* **HU-03 (Creación de Reserva de Estancia):** Como **huésped**, quiero iniciar el expediente de reserva de una habitación en estado "Pendiente de Garantía".
* **HU-04 (Cálculo de Ocupantes y Extras):** Como **huésped**, quiero indicar el número de adultos, niños y régimen (Desayuno, Media Pensión) para actualizar el total acumulado.

### Módulo 3: Pago y Confirmación
* **HU-05 (Pago de Depósito / Estancia):** Como **huésped**, quiero abonar el anticipo o total requerido mediante tarjeta para confirmar la reserva del alojamiento.
* **HU-06 (Generación de Bono de Reserva):** Como **huésped**, quiero recibir un documento con localizador QR y las políticas del establecimiento para presentarlo a la llegada.
* **HU-07 (Bloqueo de Calendario de Habitación):** Como **sistema**, quiero cerrar la venta de esa habitación específica durante las noches reservadas para evitar reservas duplicadas.

### Módulo 4: Usuario y Mi Cuenta
* **HU-08 (Registro de Huésped):** Como **huésped**, quiero registrar mis datos de contacto e identificación oficial para agilizar el registro legal a la llegada.
* **HU-09 (Historial de Reservas):** Como **huésped**, quiero revisar mis reservas actuales y pasadas para consultar los detalles de la estancia o fechas reservadas.
* **HU-10 (Cancelación de Reserva):** Como **huésped**, quiero anular una reserva con la antelación fijada en la política para obtener la devolución del importe abonado.

---

## 📚 9. Préstamo de Libros / Material Escolar

### Módulo 1: Catálogo y Disponibilidad
* **HU-01 (Consulta de Catálogo de Biblioteca):** Como **estudiante/docente**, quiero buscar libros y materiales por título, autor o materia para conocer sus datos y estado.
* **HU-02 (Ver Ejemplares Libres):** Como **estudiante/docente**, quiero consultar la ficha de una obra para comprobar cuántas copias físicas están disponibles hoy.

### Módulo 2: Reserva y Operación
* **HU-03 (Creación de Solicitud de Préstamo):** Como **estudiante/docente**, quiero marcar un ejemplar para iniciar una solicitud de préstamo en estado "Pendiente de Retiro".
* **HU-04 (Selección de Plazo de Préstamo):** Como **estudiante/docente**, quiero elegir la duración del préstamo (7, 14 o 21 días) para calcular la fecha límite de devolución.

### Módulo 3: Pago y Confirmación
* **HU-05 (Confirmación de Préstamo):** Como **estudiante/docente**, quiero validar la recogida con mi Carné Escolar/Universitario para formalizar la salida del material.
* **HU-06 (Generación de Comprobante de Préstamo):** Como **estudiante/docente**, quiero recibir un recibo digital con el localizador y la fecha tope de devolución de los libros.
* **HU-07 (Actualización de Stock de Biblioteca):** Como **sistema**, quiero reducir en una unidad el stock disponible de la obra mientras dure el periodo de préstamo.

### Módulo 4: Usuario y Mi Cuenta
* **HU-08 (Registro de Lector):** Como **estudiante/docente**, quiero crear mi expediente de usuario mediante mi número de matrícula para utilizar los servicios de préstamo.
* **HU-09 (Mis Préstamos Activos):** Como **estudiante/docente**, quiero revisar qué libros tengo prestados en este momento y cuántos días me quedan para devolverlos.
* **HU-10 (Devolución / Cancelación de Solicitud):** Como **estudiante/docente**, quiero anular una reserva de préstamo antes de recoger el libro para que quede disponible para otro lector.

---

## 🗺️ 10. Tours y Excursiones Turísticas

### Módulo 1: Catálogo y Disponibilidad
* **HU-01 (Consulta de Excursiones):** Como **turista**, quiero ver la oferta de visitas guiadas por temática (Cultural, Naturaleza, Gastronomía) con su precio base por persona.
* **HU-02 (Selección de Turno e Idioma):** Como **turista**, quiero seleccionar un tour para ver los horarios del día y los idiomas disponibles del guía (Español, Inglés, etc.).

### Módulo 2: Reserva y Operación
* **HU-03 (Creación de Reserva de Tour):** Como **turista**, quiero seleccionar una fecha e iniciar la solicitud de reserva del grupo en estado "Pendiente".
* **HU-04 (Selección de Asistentes):** Como **turista**, quiero indicar el número de adultos y niños para que se calcule el precio final con los descuentos correspondientes.

### Módulo 3: Pago y Confirmación
* **HU-05 (Pago de la Excursión):** Como **turista**, quiero abonar el importe total mediante tarjeta o PayPal para asegurar los pases del tour.
* **HU-06 (Generación de Ticket de Excursión):** Como **turista**, quiero recibir un bono con código QR, hora exacta y ubicación del punto de encuentro con el guía.
* **HU-07 (Control de Cupo del Guía):** Como **sistema**, quiero restar las plazas contratadas de la capacidad máxima de la excursión para no exceder el grupo permitido.

### Módulo 4: Usuario y Mi Cuenta
* **HU-08 (Registro de Turista):** Como **turista**, quiero guardar mi contacto y canal preferido (email/WhatsApp) para recibir notificaciones sobre el tour.
* **HU-09 (Historial de Tours):** Como **turista**, quiero acceder al historial de visitas contratadas para revisar direcciones de salida y comprobantes.
* **HU-10 (Cancelación de Plaza):** Como **turista**, quiero cancelar mi reserva con al menos 48 horas de margen para liberar la plaza y recibir el reembolso.

---

## 🏋️ 11. Reserva de Clases en Gimnasio

### Módulo 1: Catálogo y Disponibilidad
* **HU-01 (Consulta de Clases Dirigidas):** Como **socio**, quiero revisar el catálogo de actividades (Spinning, Yoga, Pilates, Crossfit) con su descripción y nivel de intensidad.
* **HU-02 (Selección de Horario y Sala):** Como **socio**, quiero consultar la parrilla semanal de clases para verificar el horario, monitor y plazas libres por sesión.

### Módulo 2: Reserva y Operación
* **HU-03 (Creación de Reserva de Clase):** Como **socio**, quiero marcar una sesión para iniciar mi inscripción en la lista de la clase en estado "Pendiente".
* **HU-04 (Selección de Puesto / Material):** Como **socio**, quiero elegir la bici, esterilla o puesto específico en la sala para confirmar mi plaza en el cuadrante.

### Módulo 3: Pago y Confirmación
* **HU-05 (Confirmación con Créditos / Cuota):** Como **socio**, quiero validar la reserva descontando un crédito de mi cuota mensual para confirmar mi plaza.
* **HU-06 (Generación de Pase QR):** Como **socio**, quiero recibir un passe digital con código QR para fichar en el torno de entrada a la sala colectiva.
* **HU-07 (Descuento de Aforo de Sala):** Como **sistema**, quiero restar una unidad al límite de la clase una vez completado el registro del socio.

### Módulo 4: Usuario y Mi Cuenta
* **HU-08 (Registro de Socio):** Como **socio**, quiero darme de alta con mi número de abonado y tipo de tarifa (Mañanas, Tarifa Plana, Estudiante) para acceder al sistema de reservas.
* **HU-09 (Mi Calendario Deportivo):** Como **socio**, quiero ver la lista de clases a las que me he inscrito para planificar mi entrenamiento semanal.
* **HU-10 (Liberación de Plaza):** Como **socio**, quiero anular mi asistencia a la clase hasta 1 hora antes de que empiece para dar paso a socios en lista de espera.