# 📋 Backlog de Historias de Usuario (Proyectos TIC II)


Este documento es común para las **11 propuestas de proyectos** aplicables al curso y el **conjunto de 10 Historias de Usuario genéricas** diseñadas para trabajar sobre la estructura única de base de datos de 6 tablas (`USUARIO`, `RECURSO_SERVICIO`, `ELEMENTO_DISPONIBLE`, `RESERVA_COMPRA`, `DETALLE_RESERVA`, `PAGO_CONFIRMACION`).

Las entidades citadas en Mayúsculas y Monospaciado (`USUARIO`, `RECURSO_SERVICIO`, `ELEMENTO_DISPONIBLE`, `RESERVA_COMPRA`, `DETALLE_RESERVA`, `PAGO_CONFIRMACION`) corresponden exactamente a la estructura del **Modelo Entidad-Relación único**.

---

## 🔍 Módulo 1: Gestión de Catálogo y Consulta de Disponibilidad

### **HU-01: Consulta de Servicios Disponibles**
* **Enunciado:** Como **`USUARIO`**, quiero explorar el catálogo de **`RECURSO_SERVICIO`** filtrando por `categoria_tipo` para ver las opciones disponibles y sus `precio_base`.
* **Criterios de Aceptación:**
  1. Se muestra una lista o cuadrícula con los campos `nombre_titulo`, `categoria_tipo` y `descripcion`.
  2. El usuario puede filtrar por categoría (ej. género de película, tipo de pizza, especialidad médica).

---

### **HU-02: Selección de Horario o Espacio**
* **Enunciado:** Como **`USUARIO`**, quiero seleccionar un **`RECURSO_SERVICIO`** y ver sus registros en **`ELEMENTO_DISPONIBLE`** para elegir una `fecha_hora_inicio` e `identificador_espacio` que tenga `aforo_stock_disponible` > 0.
* **Criterios de Aceptación:**
  1. Solo se muestran los registros de **`ELEMENTO_DISPONIBLE`** cuya fecha sea igual o posterior a la actual.
  2. Si `aforo_stock_disponible` es 0, el sistema deshabilita la opción de selección (muestra "Agotado" o "Sin plazas").

---

## 🛒 Módulo 2: Proceso de Reserva y Compra

### **HU-03: Creación de la Reserva/Compra**
* **Enunciado:** Como **`USUARIO`**, quiero iniciar una **`RESERVA_COMPRA`** para registrar una transacción con mi `id_usuario` y la `fecha_creacion` actual, dejando el `estado` en "Pendiente".
* **Criterios de Aceptación:**
  1. El sistema genera un nuevo `id_reserva` en estado "Pendiente".
  2. Se vincula correctamente el `id_usuario` del cliente que ha iniciado sesión o rellenado el formulario.

---

### **HU-04: Añadir Ítems al Detalle**
* **Enunciado:** Como **`USUARIO`**, quiero indicar la `cantidad` de ítems o plazas que deseo reservar en **`DETALLE_RESERVA`** para que se calcule el `precio_unitario` y se acumule en el `importe_total` de la **`RESERVA_COMPRA`**.
* **Criterios de Aceptación:**
  1. El sistema comprueba que `cantidad` <= `aforo_stock_disponible`.
  2. Se calcula `precio_unitario` considerando el `precio_base` del servicio y el `tipo_tarifa` del usuario (ej. aplicando precio con descuento si corresponde).
  3. Se recalcula automáticamente el `importe_total` sumando los detalles registrados.

---

## 💳 Módulo 3: Pago, Confirmación y Generación de Ticket

### **HU-05: Procesamiento del Pago**
* **Enunciado:** Como **`USUARIO`**, quiero seleccionar un `metodo_pago` y confirmar la transacción para generar el registro en **`PAGO_CONFIRMACION`** y cambiar el `estado` de la **`RESERVA_COMPRA`** a "Confirmada".
* **Criterios de Aceptación:**
  1. El sistema solicita la simulación de cobro mediante el `metodo_pago` elegido (Tarjeta, Bizum, Paypal).
  2. Tras simular el pago con éxito, se registra la `fecha_pago` y el `estado` pasa de "Pendiente" a "Confirmada".

---

### **HU-06: Generación del Código Localizador / QR**
* **Enunciado:** Como **`USUARIO`**, quiero recibir un `codigo_localizador_qr` al finalizar el **`PAGO_CONFIRMACION`** para poder presentarlo como comprobante de acceso o recogida.
* **Criterios de Aceptación:**
  1. Se genera una cadena alfanumérica única o un código QR vinculado a `id_pago` e `id_reserva`.
  2. Se muestra en pantalla la confirmación final con el resumen de la reserva y el localizador visible.

---

### **HU-07: Actualización Automática de Stock/Aforo**
* **Enunciado:** Como **Sistema**, quiero descontar la `cantidad` reservada del `aforo_stock_disponible` en la tabla **`ELEMENTO_DISPONIBLE`** una vez completada la **`RESERVA_COMPRA`** para evitar sobre-reservas (*overbooking*).
* **Criterios de Aceptación:**
  1. `aforo_stock_disponible` se actualiza inmediatamente en la base de datos: `aforo_nuevo = aforo_anterior - cantidad`.

---

## 👤 Módulo 4: Gestión de Usuario y Mis Reservas

### **HU-08: Registro e Identificación de Usuario**
* **Enunciado:** Como **`USUARIO`**, quiero registrar mis datos (`nombre`, `email`, `telefono`, `tipo_tarifa`) para obtener un `id_usuario` que me permita realizar operaciones en la plataforma.
* **Criterios de Aceptación:**
  1. El sistema valida que el `email` tenga un formato correcto y no esté duplicado.
  2. Asigna la categoría en `tipo_tarifa` (Estándar, Estudiante, Senior, Socio, etc.).

---

### **HU-09: Consulta de Historial de Compras**
* **Enunciado:** Como **`USUARIO`**, quiero consultar mi historial de registros en **`RESERVA_COMPRA`** para revisar el estado, la fecha y el `importe_total` de mis operaciones pasadas.
* **Criterios de Aceptación:**
  1. Se muestra un listado de todas las reservas asociadas a `id_usuario` ordenadas por `fecha_creacion` de más reciente a más antigua.
  2. Permite visualizar el detalle con su `codigo_localizador_qr` si el estado es "Confirmada".

---

### **HU-10: Cancelación de Reserva**
* **Enunciado:** Como **`USUARIO`**, quiero cancelar una **`RESERVA_COMPRA`** en estado "Confirmada" antes de la `fecha_hora_inicio` para liberar el `aforo_stock_disponible`.
* **Criterios de Aceptación:**
  1. El `estado` de la **`RESERVA_COMPRA`** cambia a "Cancelada".
  2. Se restituye la `cantidad` sumándola de nuevo al `aforo_stock_disponible` de **`ELEMENTO_DISPONIBLE`**.