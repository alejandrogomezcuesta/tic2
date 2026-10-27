# Sesión 2 · `range`, listas y `enumerate`

**Duración:** 1 hora
**Objetivo:** recorrer repeticiones y colecciones de datos para controlar dibujos de Turtle.

## Propuesta de tiempos

| Tiempo | Actividad |
| --- | --- |
| 0–8 min | Recordatorio de Thonny, Turtle y `for` |
| 8–20 min | Comprender las variantes de `range` |
| 20–32 min | Recorrer listas con `for` |
| 32–42 min | Usar `enumerate` para obtener posición y valor |
| 42–60 min | Ejercicios y entrega |

## 1. La función `range()`

`range()` genera una secuencia de números enteros que se puede recorrer con un `for`. El límite final no se incluye.

```python
for numero in range(5):
    print(numero)
```

Imprime `0`, `1`, `2`, `3` y `4`: cinco números, desde cero hasta uno menos que el límite.

Se puede indicar también el comienzo y el paso:

```python
range(2, 7)       # 2, 3, 4, 5, 6
range(10, 0, -2)  # 10, 8, 6, 4, 2
```

La forma general es `range(inicio, limite, paso)`. El inicio se incluye y el límite no. Si se omite el inicio, empieza en cero; si se omite el paso, avanza de uno en uno.

### Ejemplo Turtle: varios cuadrados

```python
import turtle

tortuga = turtle.Turtle()
tortuga.speed(5)

for numero in range(4):
    tortuga.forward(60)
    tortuga.left(90)

turtle.done()
```

El bucle usa `range(4)` para repetir los cuatro lados. Si queremos hacer algo diferente en cada vuelta, podemos utilizar el valor de `numero`:

```python
import turtle

tortuga = turtle.Turtle()

for lado in range(3):
    tortuga.forward(60 + lado * 20)
    tortuga.left(120)

turtle.done()
```

En cada vuelta la longitud aumenta 20 unidades.

## 2. Listas: una colección ordenada

En Python, una **lista** guarda varios valores en un orden y se escribe entre corchetes. A veces se dice “array” de manera informal, pero en estos ejercicios trabajaremos con listas de Python.

```python
longitudes = [40, 70, 100]
colores = ["red", "green", "blue"]
```

El primer elemento está en la posición `0`, el segundo en la `1`, y así sucesivamente. `len(lista)` devuelve la cantidad de elementos.

```python
print(longitudes[0])  # 40
print(len(colores))   # 3
```

Un `for` puede recorrer directamente cada elemento:

```python
for color in colores:
    print(color)
```

En cada vuelta, la variable `color` contiene un elemento distinto de la lista.

### Ejemplo Turtle: dibujos con datos de una lista

```python
import turtle

tortuga = turtle.Turtle()
tortuga.speed(5)

longitudes = [40, 70, 100]
colores = ["red", "green", "blue"]

for posicion, longitud in enumerate(longitudes):
    tortuga.color(colores[posicion])
    for lado in range(4):
        tortuga.forward(longitud)
        tortuga.left(90)
    tortuga.penup()
    tortuga.forward(longitud + 20)
    tortuga.pendown()

turtle.done()
```

El ejemplo dibuja cuadrados de tres tamaños y usa la misma posición para escoger el color correspondiente.

## 3. `enumerate()`: posición y elemento

`enumerate(lista)` permite recorrer una lista y obtener a la vez el número de posición y el elemento. Por defecto, la numeración empieza en cero.

```python
colores = ["red", "green", "blue"]

for posicion, color in enumerate(colores):
    print(posicion, color)
```

Para empezar a contar desde uno —por ejemplo, para mostrar una lista numerada a las personas— se puede escribir `enumerate(colores, start=1)`.

### Ejemplo Turtle: cuadrados de distintos colores

```python
import turtle

tortuga = turtle.Turtle()
tortuga.speed(5)

longitudes = [40, 70, 100]
colores = ["red", "green", "blue"]

for posicion, longitud in enumerate(longitudes):
    tortuga.color(colores[posicion])
    for lado in range(4):
        tortuga.forward(longitud)
        tortuga.left(90)
    tortuga.penup()
    tortuga.forward(longitud + 20)
    tortuga.pendown()

turtle.done()
```

`posicion` vale `0`, `1` y `2`. Así se elige el color correspondiente en `colores[posicion]`. En la siguiente sesión veremos con detalle cómo funciona el `for` que está dentro de otro `for`.

## 4. Ejercicios

### Ejercicio 1 · Repeticiones con `range`

Usa `range(2, 8, 2)` para imprimir los números que genera. Después, modifica el inicio, el límite y el paso para imprimir los impares del 1 al 9.

### Ejercicio 2 · Lista de tamaños

Crea una lista con tres longitudes. Recorre la lista con `for` y dibuja un cuadrado para cada longitud. Deja espacio entre los cuadrados levantando el lápiz antes de mover la tortuga.

### Ejercicio 3 · Lista numerada

Crea una lista con cuatro colores de Turtle. Usa `enumerate(colores, start=1)` para mostrar en la Shell el número y el nombre de cada color. Luego usa cada color para dibujar una línea de longitud diferente.

## Entregable de la sesión

Guarda `sesion2_nombre.py`. Debe contener una lista de al menos tres tamaños y otra lista de colores, y usar `enumerate` para dibujar un cuadrado por cada tamaño. El cuadrado de cada posición debe tener el color de la misma posición.

**Antes de entregar, comprueba:** las dos listas tienen la misma cantidad de elementos, los dibujos se distinguen y el programa se ejecuta sin errores.
