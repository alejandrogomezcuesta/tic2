# Listas en python

Una lista guarda varios valores en orden y se puede modificar: es la estructura para colecciones que crecen o cambian, como una lista de la compra.

## 1. Teoría

![Posiciones de una lista de 4 elementos](image-11.png)

```python
compra = ["pan", "leche", "huevos"]   # crear una lista
compra[0]                             # "pan" (primer elemento)
compra[-1]                            # "huevos" (último elemento)
len(compra)                           # 3 (cuántos elementos hay)
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

Para recorrer una lista con número de orden:

```python linenums="1"
texto = ""
for i, producto in enumerate(compra):
  texto = texto + f"{i+1}. {producto}\n"

# Ya puedes usar `texto` para ponerlo en un text area, por ejemplo.
```

Fíjate que el código anterior hace muchas cosas en pocas líneas.

- Línea 1. Crea la variable `texto` y se le pone como valor la cadena vacía.
- Línea 2 `for i, producto in enumerate(compra):`, vamos a analizarla poco a poco:
  - `for` indica que tenemos un bucle. Por tanto, la línea de debajo (la línea 3) se va a ejecutar varias veces.
  - `enumerate(compra)` hace que por cada elemento de la lista `compra` se produzcan dos valores: el índice y el valor concreto de la lista. Es decir, `compra` tiene tres elementos `["pan", "leche", "huevos"]`. Por tanto, `enumerate(compra)` genera estos valores:
    - `(0, "pan")`
    - `(1, "leche")`
    - `(2, "huevos")`
  - `i, producto`: los dos valores anteriores se recogen en estas dos variables.
- Línea 3. Se ejecuta tres veces. Cada vez, las variables `i` y `producto` valen tres cosas diferentes como acabamos de ver en el análisis de la orden anterior. En cada una de las veces se realiza lo siguiente:
  - `{i+1}`: se toma el índice y se le suma uno. Este resultado es el que se muestra. Por tanto, se mostrará `1, 2 y 3`.
  - `{producto}`. En cada iteración del bucle se muestra un element diferente: `["pan", "leche", "huevos"]`.
  - `texto = texto + ···`. Hace que el resultado de una iteración se acumule en la siguiente. Por tanto, el resultado final es algo así:
    ```text
    1. pan
    2. leche
    3. huevos
    ``` 


<form action="https://www.jdoodle.com/api/redirect-to-post/python3-programming-online" method="post" target="_blank">
    <textarea name="initScript" rows="8" cols="80">print("My code is on jdoodle!!")</textarea>
    <br>
    <input type="submit" value="Send to JDoodle">
</form>


## 2. Listas en Anvil

- Una lista que debe recordarse entre pulsaciones de botones se guarda como atributo del formulario: `self.tareas = []`, dentro de `__init__`, después de `self.init_components(**properties)`.
- Un `DropDown` muestra una lista directamente: `self.drop_tareas.items = self.tareas`.
- Para mostrar varias líneas, usa un TextArea con la casilla `enabled` desmarcada y escribe en su `.text`. El salto de línea se escribe `\n`.

## 3. Ejemplo guiado: lista de tareas

Vamos a crear un nuevo proyecto con AnvilWorks llamado `Lista de tareas - Nombre Apellidos`.

Componentes: `lbl_tarea`, `txt_tarea`, `btn_anadir`, `btn_mostrar`, `lbl_total` y `area_lista` (TextArea).

![La aplicación debe parecerse a esto](image-12.png)

Pulsamos sobre el botón `Code` y escribimos el siguiente código. Sustituye todo el código que hay por este.

```python
from ._anvil_designer import Form1Template
from anvil import *

class Form1(Form1Template):
  def __init__(self, **properties):
    self.init_components(**properties)
    self.tareas = []

  def btn_anadir_click(self, **event_args):
    if self.txt_tarea.text == "":
      alert("Escribe una tarea")
    else:
      self.tareas.append(self.txt_tarea.text)
      self.txt_tarea.text = ""
      self.lbl_total.text = f"Tareas: {len(self.tareas)}"

  def btn_mostrar_click(self, **event_args):
    texto = ""

    for i, tarea in enumerate(self.tareas, start=1):
      texto += f"{i}. {tarea}\n" # El \n del final es para añadir una línea nueva

    self.area_lista.text = texto

```

Y ahora asocia las funciones anteriores con el evento clic de cada botón. Se puede hacer directamente en la vista del código mediante el botón *Create event handler* que está al final como puedes ver en la siguiente imagen:

![Asociar un evento con una función](image-13.png)

Repite el paso anterior asociando el componente *btn_mostrar* con el evento *click*.

## 4. Ejecución de la aplicación

Ejecuta la aplicación e inserta varias tareas. Verás que cada tarea insertada aumenta automáticamente el contador.

![Ejecución de la aplicación de tareas](image-14.png)

Y cuando quieras ver las tareas puedes pulsar el botón *Mostrar*.


