# Apuntes de Anvil con Python — 2º Bachillerato

Oct 18, 2026 · @Someone

Cuatro clases de 1 hora para crear aplicaciones web con Anvil y Python: una introducción y una clase por cada estructura de datos (listas, conjuntos y diccionarios), con 4 ejercicios cada una.

## 1. Introducción a Anvil

Anvil (anvil.works) permite crear una aplicación web programando solo en Python: el diseño se hace arrastrando componentes y la lógica se escribe en Python. En estas clases usaremos el código del formulario, que se ejecuta en el navegador.

### Crear la primera app

1. Entra en anvil.works e inicia sesión (o crea una cuenta gratuita).
2. Pulsa **Create App**, elige **Blank App** y el tema **Material Design**.
3. Cambia el nombre de la app, arriba a la izquierda, por **Clase1\_Apellido** (por ejemplo, Clase1\_Garcia).
4. Se abre **Form1**, la página de tu app. Ya puedes diseñarla.

Los menús de Anvil cambian de vez en cuando: si una opción no está donde dicen estos apuntes, búscala por su nombre en inglés.

### Las zonas del editor

&#91;embedded content: Editor de Anvil · 5 zonas\]

Cada formulario tiene dos vistas: **Design** (se dibuja arrastrando componentes) y **Code** (se escribe el Python). El botón **Run** abre tu app para probarla.

### Componentes que usaremos

| Componente | Para qué sirve | Propiedades clave |
| --- | --- | --- |
| Label | Mostrar un texto o un resultado | text |
| TextBox | Pedir un dato al usuario | text, placeholder |
| Button | Ejecutar código al pulsarlo | text, evento click |
| DropDown | Elegir una opción de una lista | items, selected\_value |
| TextArea | Mostrar o escribir varias líneas | text, enabled |

### Tres reglas que usaremos siempre

- Dale a cada componente un **nombre claro** en Properties, con un prefijo: `txt_` para TextBox, `btn_` para Button, `lbl_` para Label, `drop_` para DropDown (`txt_peso`, `btn_calcular`, `lbl_resultado`).
- En el código, un componente siempre se escribe con `self.` delante: `self.txt_peso.text`.
- Un TextBox siempre devuelve **texto** (str). Para calcular hay que convertirlo con `int()` o `float()`.

## 2. Clase 1 — Mi primer formulario: variables y if/else

Al terminar la clase, cada alumno tiene una app con 4 ejercicios numerados que piden datos, los procesan con variables y if/else, y muestran el resultado al pulsar un botón.

### Plan de la clase (60 min)

| Minutos | Actividad |
| --- | --- |
| 0–10 | Crear la app y conocer el editor (sección 1) |
| 10–25 | Ejemplo guiado: calculadora de IMC |
| 25–55 | Ejercicios 1 a 4 (unos 7 minutos cada uno) |
| 55–60 | Nombre de la app, enlace y entrega en Classroom (sección 6) |

### Cómo funciona un formulario

&#91;embedded content: Flujo de un formulario · 5 pasos\]

Un formulario no ejecuta nada hasta que ocurre un **evento**. Nosotros programamos la función que responde al evento *click* del botón.

### Programar un botón, paso a paso

1. Arrastra al formulario un TextBox por cada dato, un Button y un Label para el resultado.
2. En Properties, ponles nombre (`txt_peso`, `txt_altura`, `btn_calcular`, `lbl_resultado`) y cambia el `text` del botón a "Calcular".
3. Selecciona el botón, busca la sección **Events** en Properties y pulsa la flecha junto a **click**. Anvil te lleva a **Code** y escribe la función vacía.
4. Escribe dentro de la función lo que debe pasar.
5. Pulsa **Run** y pruébala.

### Ejemplo guiado: calculadora de IMC

Esta función vive dentro de la clase `Form1` que Anvil ya ha creado en la vista Code:

```python
  def btn_calcular_click(self, **event_args):
    if self.txt_peso.text == "" or self.txt_altura.text == "":
      alert("Rellena todos los campos")
      return
    peso = float(self.txt_peso.text)
    altura = float(self.txt_altura.text)
    imc = peso / (altura ** 2)
    if imc < 18.5:
      categoria = "Bajo peso"
    elif imc < 25:
      categoria = "Peso normal"
    else:
      categoria = "Sobrepeso"
    self.lbl_resultado.text = f"IMC: {round(imc, 1)} ({categoria})"
```

- `alert("...")` muestra una ventana emergente al usuario.
- `return` sale de la función y evita seguir calculando con datos vacíos.
- `elif` significa "si no, y si...": se usa para encadenar más de dos casos.
- `f"...{variable}..."` mete el valor de una variable dentro de un texto.

### Errores frecuentes

- `ValueError`: el TextBox está vacío o has escrito la coma decimal. Usa punto: 1.75.
- `AttributeError`: el nombre del componente en el código no coincide con el de Properties.
- `IndentationError`: el código dentro de la función o del `if` no está sangrado.
- No pasa nada al pulsar: la función no está conectada al evento. Vuelve a Properties, Events, click.

### Organizar los 4 ejercicios en una sola app

Coloca los 4 ejercicios uno debajo de otro en `Form1`. Cada bloque empieza con un Label en negrita que dice **Ejercicio 1**, **Ejercicio 2**... y usa nombres con el número delante: `ej1_txt_a`, `ej1_btn`, `ej1_lbl`. Así el botón del ejercicio 1 genera la función `ej1_btn_click`. Escribe también un comentario `# Ejercicio 1` encima de cada función.

### Ejercicios

#### Ejercicio 1 · Suma de dos números

Dos TextBox (número 1 y número 2), un botón "Sumar" y un Label que muestre "La suma es ...". Pista: convierte los dos datos con `float()`. Ampliación: añade un segundo botón "Multiplicar".

#### Ejercicio 2 · ¿Mayor de edad?

Un TextBox para la edad y un botón "Comprobar". Si la edad es 18 o más, el Label dice "Eres mayor de edad"; si no, dice "Eres menor de edad: te faltan X años". Pista: los años que faltan son `18 - edad`.

#### Ejercicio 3 · Descuento en la tienda

Un TextBox para el precio. Si el precio es 100 o más, se aplica un 10 % de descuento; si no, un 5 %. Muestra el descuento y el precio final con dos decimales. Pista: `round(valor, 2)`.

#### Ejercicio 4 · Conversor de temperatura

Un DropDown con las opciones "Celsius a Fahrenheit" y "Fahrenheit a Celsius" (en Properties, `items`, una por línea), un TextBox para la temperatura y un botón "Convertir". F = C × 9/5 + 32 y C = (F − 32) × 5/9. Pista: la opción elegida se lee con `self.ej4_drop.selected_value`, y se compara con un `if`.

## 3. Clase 2 — Listas

Una lista guarda varios valores en orden y se puede modificar: es la estructura para colecciones que crecen o cambian, como una lista de la compra.

### Plan de la clase (60 min)

| Minutos | Actividad |
| --- | --- |
| 0–15 | Teoría: crear listas, posiciones y métodos |
| 15–25 | Ejemplo guiado: lista de tareas |
| 25–55 | Ejercicios 1 a 4 (unos 7 minutos cada uno) |
| 55–60 | Nombre de la app, enlace y entrega en Classroom (sección 6) |

### Teoría

&#91;embedded content: Posiciones de una lista de 4 elementos\]

```python
compra = ["pan", "leche", "huevos"]   # crear una lista
compra[0]                          # "pan" (primer elemento)
compra[-1]                         # "huevos" (último elemento)
len(compra)                        # 3 (cuántos elementos hay)
```

| Operación | Qué hace | Ejemplo |
| --- | --- | --- |
| `append(x)` | Añade al final | `compra.append("queso")` |
| `insert(i, x)` | Inserta en la posición i | `compra.insert(0, "agua")` |
| `remove(x)` | Borra la primera aparición de x (da error si no está) | `compra.remove("pan")` |
| `pop()` | Borra y devuelve el último | `ultimo = compra.pop()` |
| `x in lista` | Comprueba si x está | `"pan" in compra` |
| `index(x)` | Posición de x | `compra.index("leche")` |
| `sorted(lista)` | Devuelve una lista ordenada nueva | `sorted(compra)` |
| `sort()` | Ordena la propia lista | `compra.sort()` |
| `sum`, `min`, `max` | Suma, menor y mayor de una lista de números | `max(notas)` |
| `clear()` | Vacía la lista | `compra.clear()` |

Para recorrer una lista con número de orden, como ya sabéis:

```python
for i, producto in enumerate(compra, start=1):
  texto += f"{i}. {producto}\n"
```

### Listas en Anvil

- Una lista que debe recordarse entre pulsaciones de botones se guarda como atributo del formulario: `self.tareas = []`, dentro de `__init__`, después de `self.init_components(**properties)`.
- Un DropDown muestra una lista directamente: `self.drop_tareas.items = self.tareas`.
- Para mostrar varias líneas, usa un TextArea con la casilla `enabled` desmarcada y escribe en su `.text`. El salto de línea se escribe `\n`.

### Ejemplo guiado: lista de tareas

Componentes: `txt_tarea`, `btn_anadir`, `btn_mostrar`, `lbl_total` y `area_lista` (TextArea).

```python
class Form1(Form1Template):
  def __init__(self, **properties):
    self.init_components(**properties)
    self.tareas = []

  def btn_anadir_click(self, **event_args):
    tarea = self.txt_tarea.text
    if tarea == "":
      alert("Escribe una tarea")
    else:
      self.tareas.append(tarea)
      self.txt_tarea.text = ""
      self.lbl_total.text = f"Tareas: {len(self.tareas)}"

  def btn_mostrar_click(self, **event_args):
    texto = ""
    for i, tarea in enumerate(self.tareas, start=1):
      texto += f"{i}. {tarea}\n"
    self.area_lista.text = texto
```

### Ejercicios

Crea una app nueva llamada **Clase2\_Apellido** y numera los bloques igual que en la clase 1.

#### Ejercicio 1 · Lista de la compra

Un TextBox para el producto y tres botones: "Añadir" (agrega a la lista si no está vacío), "Mostrar" (lista numerada en un TextArea) y "Vaciar" (`clear()`). Un Label indica cuántos productos hay.

#### Ejercicio 2 · Notas de clase

Un TextBox para una nota y un botón "Añadir nota" (con `float()`; si no está entre 0 y 10, avisa con `alert`). Un botón "Estadísticas" muestra cuántas notas hay, la media (`sum(notas) / len(notas)`), la mayor, la menor y cuántas son aprobados (5 o más), contados con un `for` y un `if`. Cuidado: no se puede calcular nada con la lista vacía.

#### Ejercicio 3 · Borrar tareas

La lista empieza con tres tareas escritas en `__init__` y se muestra en un TextArea. Un TextBox y un botón "Borrar": si la tarea está en la lista, se elimina con `remove`; si no, un Label dice que no existe. Otro botón "Quitar la última" usa `pop()` solo si la lista no está vacía. Después de cada acción, el TextArea se actualiza.

#### Ejercicio 4 · Ordenar y buscar

Una lista con 6 nombres de compañeros se carga en un DropDown (`items`). Un botón "Ordenar A–Z" ordena la lista y actualiza el DropDown. Un TextBox y un botón "Buscar": si el nombre está en la lista, el Label dice "Está en la posición N" (con `index` + 1); si no, "No está en la lista".

## 4. Clase 3 — Conjuntos

Un conjunto (`set`) guarda valores sin orden y sin repetidos: sirve cuando solo importa qué elementos hay, no cuántas veces aparecen ni en qué orden.

### Plan de la clase (60 min)

| Minutos | Actividad |
| --- | --- |
| 0–15 | Teoría: crear conjuntos, métodos y operaciones entre conjuntos |
| 15–25 | Ejemplo guiado: control de asistentes |
| 25–55 | Ejercicios 1 a 4 (unos 7 minutos cada uno) |
| 55–60 | Nombre de la app, enlace y entrega en Classroom (sección 6) |

### Teoría

```python
colores = {"rojo", "verde", "azul"}   # crear un conjunto
otros = set()                         # conjunto vacío (¡{} crea un diccionario!)
sin_repetidos = set([3, 1, 3, 2, 1])  # contiene 1, 2 y 3
```

Cuatro propiedades que hay que recordar:

- No tiene **orden**: no se puede escribir `colores[0]` (daría error).
- No admite **repetidos**: añadir algo que ya está no cambia nada.
- Sus elementos son números o textos (no listas).
- Comprobar si algo está con `in` es muy rápido.

| Operación | Qué hace | Ejemplo |
| --- | --- | --- |
| `add(x)` | Añade x (si ya estaba, no pasa nada) | `colores.add("negro")` |
| `remove(x)` | Borra x (da error si no está) | `colores.remove("rojo")` |
| `discard(x)` | Borra x sin dar error si no está | `colores.discard("rosa")` |
| `x in conjunto` | Comprueba si x está | `"azul" in colores` |
| `len(conjunto)` | Cuántos elementos hay | `len(colores)` |
| `set(lista)` | Convierte una lista quitando repetidos | `set([1, 1, 2])` |
| `sorted(conjunto)` | Lista ordenada con sus elementos | `sorted(colores)` |

&#91;embedded content: Operaciones entre dos conjuntos\]

```python
a = {1, 2, 3, 4}
b = {3, 4, 5}
a & b    # {3, 4}           en común
a | b    # {1, 2, 3, 4, 5} todos, sin repetir
a - b    # {1, 2}           solo los de a
a ^ b    # {1, 2, 5}       en uno solo de los dos
```

### Conjuntos en Anvil

- Se guarda como atributo del formulario: `self.asistentes = set()` dentro de `__init__`.
- Como no tiene orden, para mostrarlo se convierte en lista ordenada: `", ".join(sorted(self.asistentes))`.
- De texto a conjunto: `"a, b, c".split(",")` da una lista, y `set(...)` la convierte. Limpia cada trozo con `.strip().lower()` para que "Ana" y "ana " cuenten como el mismo nombre.

### Ejemplo guiado: control de asistentes

Componentes: `txt_nombre`, `btn_registrar`, `lbl_aviso` y `lbl_asistentes`.

```python
class Form1(Form1Template):
  def __init__(self, **properties):
    self.init_components(**properties)
    self.asistentes = set()

  def btn_registrar_click(self, **event_args):
    nombre = self.txt_nombre.text.strip().lower()
    if nombre == "":
      alert("Escribe un nombre")
    elif nombre in self.asistentes:
      self.lbl_aviso.text = f"{nombre} ya estaba registrado"
    else:
      self.asistentes.add(nombre)
      self.lbl_aviso.text = f"Registrado. Total: {len(self.asistentes)}"
    self.lbl_asistentes.text = ", ".join(sorted(self.asistentes))
```

### Ejercicios

Crea una app nueva llamada **Clase3\_Apellido** y numera los bloques igual que en las clases anteriores.

#### Ejercicio 1 · Palabras distintas

Un TextArea para escribir una frase y un botón "Contar". Convierte la frase a minúsculas, sepárala con `split()` y crea un conjunto. Un Label dice "Has escrito N palabras, M distintas" y otro muestra las distintas ordenadas.

#### Ejercicio 2 · Sorteo sin repetidos

Un TextArea con los participantes separados por comas y un botón "Preparar sorteo" que guarda el conjunto en `self.participantes` (limpiando cada nombre) y muestra cuántos hay y cuántos repetidos se han descartado. Un botón "Sortear" muestra un ganador con `random.choice(list(self.participantes))`. Escribe `import random` en la primera línea del código y comprueba que hay participantes antes de sortear.

#### Ejercicio 3 · Aficiones en común

Dos TextBox con las aficiones de dos personas separadas por comas. Un botón "Comparar" muestra en tres Labels las aficiones en común (`&`), todas las aficiones (`|`) y las que solo tiene la primera persona (`-`). Si no hay ninguna en común, el primer Label dice "No tienen aficiones en común".

#### Ejercicio 4 · Quitar números repetidos

Un TextBox con números separados por espacios (por ejemplo, 3 1 3 2 1). Con un `for`, convierte cada trozo con `int()` y guárdalo en una lista. Luego crea el conjunto y muestra los números sin repetir, ordenados, y cuántos elementos se han eliminado (`len(lista) - len(conjunto)`).

## 5. Clase 4 — Diccionarios

Un diccionario (`dict`) guarda pares clave: valor y encuentra un valor al instante a partir de su clave, sin recorrer nada: es la estructura para agendas, precios, notas por alumno o contadores.

### Plan de la clase (60 min)

| Minutos | Actividad |
| --- | --- |
| 0–15 | Teoría: crear diccionarios, acceder, modificar y recorrer |
| 15–25 | Ejemplo guiado: agenda de contactos |
| 25–55 | Ejercicios 1 a 4 (unos 7 minutos cada uno) |
| 55–60 | Nombre de la app, enlace y entrega en Classroom (sección 6) |

### Teoría

&#91;embedded content: Pares clave: valor de una agenda\]

```python
agenda = {"Ana": "600111222", "Luis": "600333444"}   # crear
agenda["Luis"]                    # "600333444" (da error si la clave no existe)
agenda.get("Pedro", "no existe")  # "no existe" (no da error)
agenda["Marta"] = "600555666"     # añadir una clave nueva
agenda["Ana"] = "600999000"       # modificar un valor existente
del agenda["Luis"]                # borrar un par
"Ana" in agenda                   # True: `in` mira las claves
len(agenda)                       # número de pares
```

| Operación | Qué devuelve |
| --- | --- |
| `agenda.keys()` | Todas las claves |
| `agenda.values()` | Todos los valores |
| `agenda.items()` | Todos los pares (clave, valor) |
| `agenda.get(clave, defecto)` | El valor, o `defecto` si la clave no existe |
| `agenda.pop(clave)` | Borra el par y devuelve su valor |

Para recorrer un diccionario:

```python
for nombre, telefono in agenda.items():
  texto += f"{nombre}: {telefono}\n"
```

Patrón muy útil, el **contador**: cuántas veces aparece cada elemento.

```python
conteo = {}
for letra in "banana":
  conteo[letra] = conteo.get(letra, 0) + 1
# resultado: b aparece 1 vez, a 3 veces y n 2 veces
```

### Diccionarios en Anvil

- Se guarda como atributo del formulario: `self.agenda = {}` dentro de `__init__`. Unas llaves vacías crean un diccionario; para un conjunto vacío se usa `set()`.
- Para llenar un DropDown con las claves: `self.drop_producto.items = list(self.precios.keys())`.
- Para mostrar todo el contenido, recorre `items()` y escribe en un TextArea.

### Ejemplo guiado: agenda de contactos

Componentes: `txt_nombre`, `txt_telefono`, `btn_guardar`, `btn_buscar`, `btn_mostrar`, `lbl_resultado` y `area_agenda`.

```python
class Form1(Form1Template):
  def __init__(self, **properties):
    self.init_components(**properties)
    self.agenda = {}

  def btn_guardar_click(self, **event_args):
    nombre = self.txt_nombre.text.strip()
    if nombre == "" or self.txt_telefono.text == "":
      alert("Rellena nombre y teléfono")
    else:
      self.agenda[nombre] = self.txt_telefono.text
      self.lbl_resultado.text = f"Guardado: {nombre}"

  def btn_buscar_click(self, **event_args):
    nombre = self.txt_nombre.text.strip()
    telefono = self.agenda.get(nombre, "")
    if telefono == "":
      self.lbl_resultado.text = "Ese contacto no existe"
    else:
      self.lbl_resultado.text = f"{nombre}: {telefono}"

  def btn_mostrar_click(self, **event_args):
    texto = ""
    for nombre, telefono in self.agenda.items():
      texto += f"{nombre}: {telefono}\n"
    self.area_agenda.text = texto
```

### Ejercicios

Crea una app nueva llamada **Clase4\_Apellido** y numera los bloques igual que en las clases anteriores.

#### Ejercicio 1 · Precios de la cafetería

El diccionario empieza así: café 1.20, tostada 1.80, zumo 2.00, bocadillo 3.50. Un DropDown muestra los productos (las claves), un TextBox pide la cantidad y un botón "Calcular" muestra "3 x café = 3.6 euros". Si la cantidad no es mayor que 0, avisa con `alert`.

#### Ejercicio 2 · Traductor

Un diccionario español-inglés con 8 palabras. Un TextBox y un botón "Traducir" muestran la traducción con `get`; si la palabra no está, el Label dice "Palabra no encontrada". Dos TextBox más y un botón "Añadir palabra" amplían el diccionario.

#### Ejercicio 3 · Notas de la clase

Dos TextBox (nombre y nota) y un botón "Guardar" que guarda `notas[nombre] = nota`; si el alumno ya existía, se actualiza su nota. Un botón "Mostrar todas" recorre `items()` y las escribe en un TextArea. Un botón "Resumen" calcula la media con `values()` y busca, con un `for` y un `if`, el alumno con la nota más alta.

#### Ejercicio 4 · Contador de palabras

Un TextArea para un texto y un botón "Contar". Con `lower()` y `split()`, crea un diccionario de frecuencias usando `get(palabra, 0) + 1`. Muestra en otro TextArea cada palabra con su número de apariciones y, en un Label, la palabra que más se repite.

### Resumen de las tres estructuras

| Estructura | Se escribe | ¿Repetidos? | Se accede por | Úsala para |
| --- | --- | --- | --- | --- |
| Lista | `["pan", "leche"]` | Sí | Posición: `lista[0]` | Colecciones ordenadas que cambian |
| Conjunto | `{"pan", "leche"}` | No | Pertenencia: `x in conjunto` | Quitar repetidos y comparar grupos |
| Diccionario | `{"pan": 1.2}` | Claves no; valores sí | Clave: `dic["pan"]` | Datos que se buscan por nombre |

## 6. Entrega en Classroom

Cada clase se entrega con **un solo enlace**: el enlace de clonación de tu app de Anvil, que permite al profesor abrir una copia de tu proyecto, ejecutarla y revisar el diseño y el código.

&#91;embedded content: Entrega en Classroom · 5 pasos\]

En Anvil, el botón **Share** está arriba a la derecha. Si tu versión muestra otros nombres, busca la opción de compartir mediante enlace de clonación (*Clone link*).

### Antes de pulsar Entregar

- La app se llama **Clase1\_Apellido**, **Clase2\_Apellido**... según la clase.
- Los 4 ejercicios están en la misma app, en orden, cada uno con su título **Ejercicio 1**, **Ejercicio 2**, **Ejercicio 3** y **Ejercicio 4**.
- Cada función tiene encima un comentario con su número (`# Ejercicio 1`).
- Has pulsado **Run** y has probado cada ejercicio con datos correctos y con un dato vacío.
- El enlace que pegas en Classroom es el de clonación, no una captura ni el nombre de la app.
