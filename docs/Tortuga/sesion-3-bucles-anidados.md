# Sesión 3 · Bucles con condiciones y bucles anidados

**Duración:** 1 hora
**Objetivo:** combinar `for` con `if` y comprender cómo se ejecuta un bucle dentro de otro.

## Propuesta de tiempos

| Tiempo | Actividad |
| --- | --- |
| 0–8 min | Repaso: `range`, listas y `enumerate` |
| 8–20 min | Condición `if` dentro de un `for` |
| 20–30 min | Ejemplo de Turtle con condición |
| 30–42 min | Bucle `for` dentro de otro `for` |
| 42–60 min | Ejercicios y entrega |

## 1. Un `if` dentro de un `for`

Una condición permite elegir qué instrucciones ejecutar. Si ponemos un `if` dentro del bloque de un `for`, la condición se comprueba en cada vuelta.

```python
for numero in range(6):
    if numero % 2 == 0:
        print(numero, "es par")
```

El operador `%` calcula el resto de una división. Si `numero % 2 == 0`, el número es divisible entre dos y es par. La sangría muestra que el `if` está dentro del `for` y que `print` está dentro del `if`.

### Ejemplo Turtle: dibujar solo en vueltas pares

```python
import turtle

tortuga = turtle.Turtle()
tortuga.speed(5)

for vuelta in range(8):
    if vuelta % 2 == 0:
        tortuga.forward(60)
        tortuga.left(45)
    else:
        tortuga.penup()
        tortuga.forward(30)
        tortuga.pendown()

turtle.done()
```

El `for` se ejecuta ocho veces. En cada vuelta, el `if` decide qué recorrido realizar. La alternativa `else` se ejecuta cuando la condición no se cumple.

## 2. Un `for` dentro de otro `for`

Un bucle anidado es un bucle que está dentro del bloque de otro. Por cada vuelta del bucle exterior, el interior completa todas sus vueltas.

```python
for fila in range(3):
    for columna in range(4):
        print(fila, columna)
```

El bucle exterior se ejecuta tres veces. Para cada valor de `fila`, el interior recorre las cuatro columnas. En total, se imprimen `3 × 4 = 12` pares.

La sangría ayuda a leer la estructura:

```text
for fila ...:             # bucle exterior
    for columna ...:      # bucle interior
        instruccion       # se repite en el interior
```

### Ejemplo Turtle: una cuadrícula de cuadrados

```python
import turtle

tortuga = turtle.Turtle()
tortuga.speed(0)

for fila in range(3):
    for columna in range(3):
        for lado in range(4):
            tortuga.forward(30)
            tortuga.left(90)
        tortuga.penup()
        tortuga.forward(45)
        tortuga.pendown()

    tortuga.penup()
    tortuga.backward(3 * 45)
    tortuga.right(90)
    tortuga.forward(45)
    tortuga.left(90)
    tortuga.pendown()

turtle.done()
```

Los dos bucles exteriores colocan nueve cuadrados en tres filas y tres columnas. El tercer bucle dibuja los cuatro lados de cada cuadrado. El lápiz se levanta para desplazarse sin trazar líneas entre figuras.

## 3. Ejemplo combinado: condición en una cuadrícula

Podemos poner un `if` dentro del bucle interior para tomar una decisión en cada casilla:

```python
import turtle

tortuga = turtle.Turtle()
tortuga.speed(0)
colores = ["blue", "orange"]

for fila in range(4):
    for columna in range(4):
        if (fila + columna) % 2 == 0:
            tortuga.color(colores[0])
        else:
            tortuga.color(colores[1])

        for lado in range(4):
            tortuga.forward(25)
            tortuga.left(90)
        tortuga.penup()
        tortuga.forward(35)
        tortuga.pendown()

    tortuga.penup()
    tortuga.backward(4 * 35)
    tortuga.right(90)
    tortuga.forward(35)
    tortuga.left(90)
    tortuga.pendown()

turtle.done()
```

La condición alterna los colores según la fila y la columna. Observa que el bucle que dibuja los lados está dentro del bucle de las columnas; la sangría determina cuántas veces se repite.

## 4. Ejercicios

### Ejercicio 1 · Líneas alternas

Dibuja ocho segmentos. Usa un `if` dentro de `for` para que las vueltas pares sean azules y las impares rojas. Cambia la dirección entre segmentos para crear una forma sencilla.

### Ejercicio 2 · Cuadrícula de círculos

Usa dos bucles `for` para colocar círculos en tres filas y cuatro columnas. Puedes usar `tortuga.circle(15)` para cada círculo. Levanta el lápiz y desplázate entre posiciones.

### Ejercicio 3 · Tablero

Partiendo del ejemplo combinado, cambia el tamaño de la cuadrícula y sus colores. Prueba qué sucede si modificas la condición a `(fila + columna) % 2 == 1`.

## Entregable de la sesión

Guarda `sesion3_nombre.py` con un dibujo tipo tablero de al menos cuatro filas y cuatro columnas. Debe usar dos bucles `for` anidados y un `if` dentro de ellos para alternar dos colores.

**Antes de entregar, comprueba:** aparecen todas las filas y columnas, se alternan los colores y no quedan líneas de desplazamiento entre casillas.
