# Ejercicios de listas


## Ejercicio 1 · Lista de la compra

Un TextBox para el producto y tres botones: "Añadir" (agrega a la lista si no está vacío), "Mostrar" (lista numerada en un TextArea) y "Vaciar" (`clear()`). Un Label indica cuántos productos hay.

## Ejercicio 2 · Notas de clase

Un TextBox para una nota y un botón "Añadir nota" (con `float()`; si no está entre 0 y 10, avisa con `alert`). Un botón "Estadísticas" muestra cuántas notas hay, la media (`sum(notas) / len(notas)`), la mayor, la menor y cuántas son aprobados (5 o más), contados con un `for` y un `if`. Cuidado: no se puede calcular nada con la lista vacía.

## Ejercicio 3 · Borrar tareas

La lista empieza con tres tareas escritas en `__init__` y se muestra en un TextArea.

La lista de tareas la creamos así:

```python
lista_tareas = ["Tarea 1", "Tarea 2", "Tarea 3"]
```
Después tenemos un TextBox y un botón "Borrar".

En el TexBox ponemos la tarea a borrar y cuando pulsamos sobre el botón *Borrar*: si la tarea está en la lista, se elimina con `remove`; si no, un Label dice que no existe.

Por otro lado, hay un botón que se llama "Quitar la última tarea" que usa la función `pop()` solo si la lista no está vacía. Después de cada acción, el TextArea se actualiza.

## Ejercicio 4 · Ordenar y buscar

[Entra en este anvil](https://key-dense-international.anvil.app) y haz clic en los tres puntitos del botón *Publish* y pulsa en *Clone app* para tener una copia de la misma.

Modifica el dropdown con 6 nombres de compañeros tuyos.

Cuando se pulse el botón tienen que salir los nombres de tus compañeros ordenados alfabéticamente. Mira en [los apuntes de la listas](04-listas.md) para encontrar cómo se hace eso.

