# 🗄️ Adaptación de Base de Datos en Mermaid (11 Proyectos)

Este documento traduce el modelo de base de datos genérico de **6 tablas** (`USUARIO`, `RECURSO_SERVICIO`, `ELEMENTO_DISPONIBLE`, `RESERVA_COMPRA`, `DETALLE_RESERVA`, `PAGO_CONFIRMACION`) a los nombres de entidades y atributos específicos de cada uno de los 11 proyectos mediante diagramas **Mermaid ER**.

---

## 🎬 1. Venta de Entradas de Cine

```mermaid
erDiagram
    ESPECTADOR ||--o{ COMPRA_ENTRADA : realiza
    ESPECTADOR {
        int id_espectador PK
        string nombre
        string email
        string telefono
        string tipo_tarifa
    }

    PELICULA ||--o{ SESION_SALA : oferta
    PELICULA {
        int id_pelicula PK
        string titulo
        string genero
        int duracion_min
        decimal precio_base
    }

    SESION_SALA ||--o{ DETALLE_COMPRA : incluye
    SESION_SALA {
        int id_sesion PK
        int id_pelicula FK
        datetime fecha_hora_inicio
        string numero_sala
        int butacas_disponibles
    }

    COMPRA_ENTRADA ||--o{ DETALLE_COMPRA : contiene
    COMPRA_ENTRADA ||--|| PAGO_TICKET : confirma
    COMPRA_ENTRADA {
        int id_compra PK
        int id_espectador FK
        datetime fecha_compra
        string estado
        decimal importe_total
    }

    DETALLE_COMPRA {
        int id_detalle PK
        int id_compra FK
        int id_sesion FK
        int cantidad_entradas
        decimal precio_unitario
    }

    PAGO_TICKET {
        int id_pago PK
        int id_compra FK
        string metodo_pago
        string codigo_qr
        datetime fecha_pago
    }
```

---

## ✂️ 2. Peluquería / Barbería

```mermaid
erDiagram
    CLIENTE ||--o{ CITA_SERVICIO : reserva
    CLIENTE {
        int id_cliente PK
        string nombre
        string email
        string telefono
        string preferencia_estilo
    }

    SERVICIO_PELUQUERIA ||--o{ HORARIO_ESTILISTA : agenda
    SERVICIO_PELUQUERIA {
        int id_servicio PK
        string nombre_servicio
        string categoria
        int duracion_est_min
        decimal precio_base
    }

    HORARIO_ESTILISTA ||--o{ DETALLE_CITA : incluye
    HORARIO_ESTILISTA {
        int id_horario PK
        int id_servicio FK
        datetime fecha_hora_inicio
        string nombre_estilista
        int hueco_disponible
    }

    CITA_SERVICIO ||--o{ DETALLE_CITA : contiene
    CITA_SERVICIO ||--|| CONFIRMACION_CITA : liquida
    CITA_SERVICIO {
        int id_cita PK
        int id_cliente FK
        datetime fecha_reserva
        string estado
        decimal importe_total
    }

    DETALLE_CITA {
        int id_detalle PK
        int id_cita FK
        int id_horario FK
        int cantidad
        decimal precio_aplicado
    }

    CONFIRMACION_CITA {
        int id_pago PK
        int id_cita FK
        string metodo_pago
        string localizador_reserva
        datetime fecha_pago
    }
```

---

## 🍕 3. Pizzería / Restaurante Local

```mermaid
erDiagram
    CLIENTE ||--o{ COMANDA_PEDIDO : realiza
    CLIENTE {
        int id_cliente PK
        string nombre
        string email
        string telefono
        string direccion_envio
    }

    PLATO_PIZZA ||--o{ TURNO_COCINA : programa
    PLATO_PIZZA {
        int id_plato PK
        string nombre_plato
        string categoria_menu
        string alergenos
        decimal precio_base
    }

    TURNO_COCINA ||--o{ DETALLE_PEDIDO : despacha
    TURNO_COCINA {
        int id_turno PK
        int id_plato FK
        datetime hora_entrega_estimada
        string id_horno_franja
        int capacidad_restante
    }

    COMANDA_PEDIDO ||--o{ DETALLE_PEDIDO : contiene
    COMANDA_PEDIDO ||--|| PAGO_COMANDA : liquida
    COMANDA_PEDIDO {
        int id_pedido PK
        int id_cliente FK
        datetime fecha_hora_pedido
        string estado
        decimal importe_total
    }

    DETALLE_PEDIDO {
        int id_detalle PK
        int id_pedido FK
        int id_turno FK
        int cantidad
        decimal precio_unitario
    }

    PAGO_COMANDA {
        int id_pago PK
        int id_pedido FK
        string metodo_pago
        string codigo_ticket_qr
        datetime fecha_pago
    }
```

---

## 🚌 4. Venta de Billetes de Autobús / Tren

```mermaid
erDiagram
    PASAJERO ||--o{ RESERVA_BILLETE : compra
    PASAJERO {
        int id_pasajero PK
        string dni_pasaporte
        string nombre
        string email
        string tipo_descuento
    }

    RUTA_TRAYECTO ||--o{ EXPEDICION_VIAJE : programa
    RUTA_TRAYECTO {
        int id_ruta PK
        string origen
        string destino
        string codigo_linea
        decimal precio_base
    }

    EXPEDICION_VIAJE ||--o{ DETALLE_BILLETE : asigna
    EXPEDICION_VIAJE {
        int id_expedicion PK
        int id_ruta FK
        datetime fecha_hora_salida
        string num_vehiculo
        int plazas_libres
    }

    RESERVA_BILLETE ||--o{ DETALLE_BILLETE : contiene
    RESERVA_BILLETE ||--|| PAGO_PASAJE : liquida
    RESERVA_BILLETE {
        int id_reserva PK
        int id_pasajero FK
        datetime fecha_compra
        string estado
        decimal importe_total
    }

    DETALLE_BILLETE {
        int id_detalle PK
        int id_reserva FK
        int id_expedicion FK
        int numero_asiento
        decimal precio_final
    }

    PAGO_PASAJE {
        int id_pago PK
        int id_reserva FK
        string metodo_pago
        string codigo_qr_embarque
        datetime fecha_pago
    }
```

---

## 🎾 5. Reserva de Pistas de Pádel / Club Deportivo

```mermaid
erDiagram
    JUGADOR ||--o{ RESERVA_PISTA : realiza
    JUGADOR {
        int id_jugador PK
        string nombre
        string email
        string telefono
        string nivel_juego
    }

    PISTA_DEPORTIVA ||--o{ CUADRANTE_HORARIO : agenda
    PISTA_DEPORTIVA {
        int id_pista PK
        string nombre_pista
        string tipo_superficie
        boolean cubierta
        decimal precio_hora_base
    }

    CUADRANTE_HORARIO ||--o{ DETALLE_PARTIDO : asigna
    CUADRANTE_HORARIO {
        int id_cuadrante PK
        int id_pista FK
        datetime fecha_hora_inicio
        string franja_90min
        int estado_disponibilidad
    }

    RESERVA_PISTA ||--o{ DETALLE_PARTIDO : contiene
    RESERVA_PISTA ||--|| PAGO_PISTA : liquida
    RESERVA_PISTA {
        int id_reserva PK
        int id_jugador FK
        datetime fecha_reserva
        string estado
        decimal importe_total
    }

    DETALLE_PARTIDO {
        int id_detalle PK
        int id_reserva FK
        int id_cuadrante FK
        int incluye_luz
        decimal precio_tramo
    }

    PAGO_PISTA {
        int id_pago PK
        int id_reserva FK
        string metodo_pago
        string codigo_pin_acceso
        datetime fecha_pago
    }
```

---

## 🩺 6. Clínica Veterinaria / Centro Médico

```mermaid
erDiagram
    PACIENTE_PROPIETARIO ||--o{ EXPEDIENTE_CITA : solicita
    PACIENTE_PROPIETARIO {
        int id_usuario PK
        string nombre
        string email
        string telefono
        string num_historial
    }

    SERVICIO_MEDICO ||--o{ AGENDA_CONSULTA : oferta
    SERVICIO_MEDICO {
        int id_servicio PK
        string especialidad
        string descripcion
        int duracion_min
        decimal precio_base
    }

    AGENDA_CONSULTA ||--o{ DETALLE_CONSULTA : incluye
    AGENDA_CONSULTA {
        int id_agenda PK
        int id_servicio FK
        datetime fecha_hora_inicio
        string id_box_doctor
        int cita_disponible
    }

    EXPEDIENTE_CITA ||--o{ DETALLE_CONSULTA : contiene
    EXPEDIENTE_CITA ||--|| CONFIRMACION_MEDICA : valida
    EXPEDIENTE_CITA {
        int id_cita PK
        int id_usuario FK
        datetime fecha_solicitud
        string estado
        decimal importe_total
    }

    DETALLE_CONSULTA {
        int id_detalle PK
        int id_cita FK
        int id_agenda FK
        int cantidad
        decimal precio_aplicado
    }

    CONFIRMACION_MEDICA {
        int id_pago PK
        int id_cita FK
        string seguro_o_metodo
        string localizador_cita
        datetime fecha_pago
    }
```

---

## 🎸 7. Entradas para Festivales de Música

```mermaid
erDiagram
    ASISTENTE ||--o{ COMPRA_ABONO : realiza
    ASISTENTE {
        int id_asistente PK
        string nombre
        string email
        string dni
        int edad
    }

    TIPO_ENTRADA_FESTIVAL ||--o{ ESCENARIO_JORNADA : oferta
    TIPO_ENTRADA_FESTIVAL {
        int id_tipo_entrada PK
        string nombre_modalidad
        string zona_acceso
        int dias_validez
        decimal precio_base
    }

    ESCENARIO_JORNADA ||--o{ DETALLE_ABONO : incluye
    ESCENARIO_JORNADA {
        int id_jornada PK
        int id_tipo_entrada FK
        datetime fecha_dia
        string recinto_tramo
        int aforo_disponible
    }

    COMPRA_ABONO ||--o{ DETALLE_ABONO : contiene
    COMPRA_ABONO ||--|| PAGO_PULSERA : liquida
    COMPRA_ABONO {
        int id_compra PK
        int id_asistente FK
        datetime fecha_compra
        string estado
        decimal importe_total
    }

    DETALLE_ABONO {
        int id_detalle PK
        int id_compra FK
        int id_jornada FK
        int cantidad_pases
        decimal precio_tramo
    }

    PAGO_PULSERA {
        int id_pago PK
        int id_compra FK
        string metodo_pago
        string qr_nominativo
        datetime fecha_pago
    }
```

---

## 🏨 8. Reserva en Hotel Rural / Camping

```mermaid
erDiagram
    HUESPED ||--o{ RESERVA_ESTANCIA : solicita
    HUESPED {
        int id_huesped PK
        string nombre
        string email
        string telefono
        string documento_id
    }

    TIPO_ALOJAMIENTO ||--o{ CALENDARIO_HABITACION : dispone
    TIPO_ALOJAMIENTO {
        int id_alojamiento PK
        string categoria
        int capacidad_max
        string servicios_incluidos
        decimal precio_noche_base
    }

    CALENDARIO_HABITACION ||--o{ DETALLE_ESTANCIA : reserva
    CALENDARIO_HABITACION {
        int id_calendario PK
        int id_alojamiento FK
        datetime fecha_noche
        string num_habitacion_parcela
        int disponible
    }

    RESERVA_ESTANCIA ||--o{ DETALLE_ESTANCIA : contiene
    RESERVA_ESTANCIA ||--|| BONO_CONFIRMACION : garantiza
    RESERVA_ESTANCIA {
        int id_reserva PK
        int id_huesped FK
        datetime fecha_creacion
        string estado
        decimal importe_total
    }

    DETALLE_ESTANCIA {
        int id_detalle PK
        int id_reserva FK
        int id_calendario FK
        int num_noches
        decimal precio_por_noche
    }

    BONO_CONFIRMACION {
        int id_pago PK
        int id_reserva FK
        string metodo_pago
        string qr_checkin
        datetime fecha_pago
    }
```

---

## 📚 9. Préstamo de Libros / Material Escolar

```mermaid
erDiagram
    LECTOR ||--o{ SOLICITUD_PRESTAMO : genera
    LECTOR {
        int id_lector PK
        string num_matricula
        string nombre
        string email
        string tipo_usuario
    }

    OBRA_CATALOGO ||--o{ EJEMPLAR_BIBLIOTECA : dispone
    OBRA_CATALOGO {
        int id_obra PK
        string titulo
        string autor
        string materia_isbn
        decimal valor_reposicion
    }

    EJEMPLAR_BIBLIOTECA ||--o{ DETALLE_PRESTAMO : asigna
    EJEMPLAR_BIBLIOTECA {
        int id_ejemplar PK
        int id_obra FK
        datetime fecha_alta
        string codigo_ubicacion
        int disponible_prestamo
    }

    SOLICITUD_PRESTAMO ||--o{ DETALLE_PRESTAMO : contiene
    SOLICITUD_PRESTAMO ||--|| COMPROBANTE_RETIRO : valida
    SOLICITUD_PRESTAMO {
        int id_prestamo PK
        int id_lector FK
        datetime fecha_solicitud
        string estado
        decimal importe_fianza
    }

    DETALLE_PRESTAMO {
        int id_detalle PK
        int id_prestamo FK
        int id_ejemplar FK
        int dias_prestamo
        decimal tasa_o_sancion
    }

    COMPROBANTE_RETIRO {
        int id_pago PK
        int id_prestamo FK
        string metodo_validacion
        string qr_prestamo
        datetime fecha_confirmacion
    }
```

---

## 🗺️ 10. Tours y Excursiones Turísticas

```mermaid
erDiagram
    TURISTA ||--o{ CONTRATO_TOUR : realiza
    TURISTA {
        int id_turista PK
        string nombre
        string email
        string telefono
        string idioma_pref
    }

    EXCURSION_OFERTADA ||--o{ TURNO_GUIA : programa
    EXCURSION_OFERTADA {
        int id_excursion PK
        string titulo_tour
        string tematica
        int duracion_horas
        decimal precio_persona_base
    }

    TURNO_GUIA ||--o{ DETALLE_EXCURSION : reserva
    TURNO_GUIA {
        int id_turno PK
        int id_excursion FK
        datetime fecha_hora_salida
        string idioma_guia
        int cupo_restante
    }

    CONTRATO_TOUR ||--o{ DETALLE_EXCURSION : contiene
    CONTRATO_TOUR ||--|| VOUCHER_PAGO : liquida
    CONTRATO_TOUR {
        int id_contrato PK
        int id_turista FK
        datetime fecha_reserva
        string estado
        decimal importe_total
    }

    DETALLE_EXCURSION {
        int id_detalle PK
        int id_contrato FK
        int id_turno FK
        int num_asistentes
        decimal precio_aplicado
    }

    VOUCHER_PAGO {
        int id_pago PK
        int id_contrato FK
        string metodo_pago
        string qr_punto_encuentro
        datetime fecha_pago
    }
```

---

## 🏋️ 11. Reserva de Clases en Gimnasio

```mermaid
erDiagram
    SOCIO ||--o{ INSCRIPCION_CLASE : genera
    SOCIO {
        int id_socio PK
        string num_abonado
        string nombre
        string email
        string tipo_cuota
    }

    ACTIVIDAD_DIRIGIDA ||--o{ SESION_PARRILLA : programa
    ACTIVIDAD_DIRIGIDA {
        int id_actividad PK
        string nombre_clase
        string nivel_intensidad
        int duracion_min
        decimal coste_credito_base
    }

    SESION_PARRILLA ||--o{ DETALLE_INSCRIPCION : incluye
    SESION_PARRILLA {
        int id_sesion PK
        int id_actividad FK
        datetime fecha_hora_inicio
        string sala_num
        int plazas_libres
    }

    INSCRIPCION_CLASE ||--o{ DETALLE_INSCRIPCION : contiene
    INSCRIPCION_CLASE ||--|| PASE_ACCESO : valida
    INSCRIPCION_CLASE {
        int id_inscripcion PK
        int id_socio FK
        datetime fecha_reserva
        string estado
        decimal importe_total
    }

    DETALLE_INSCRIPCION {
        int id_detalle PK
        int id_inscripcion FK
        int id_sesion FK
        int numero_puesto_bici
        decimal coste_credito
    }

    PASE_ACCESO {
        int id_pago PK
        int id_inscripcion FK
        string metodo_tarifa
        string qr_torno
        datetime fecha_pago
    }
```