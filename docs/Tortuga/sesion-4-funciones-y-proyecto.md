# Sesión 4 · Funciones y proyecto integrador

**Duración:** 1 hora
**Objetivo:** crear funciones para organizar y reutilizar código, y aplicarlas a un dibujo con Turtle.

## Propuesta de tiempos

| Tiempo | Actividad |
| --- | --- |
| 0–8 min | Repaso de bucles y sangría |
| 8–20 min | Qué es una función y cómo se llama |
| 20–32 min | Parámetros y funciones para dibujar |
| 32–52 min | Proyecto guiado y reto |
| 52–60 min | Revisión y entrega |

## 1. ¿Qué es una función?

Una función es un bloque de instrucciones con un nombre. Sirve para organizar un programa y reutilizar una tarea sin copiar el mismo código varias veces.

Se define con `def`, un nombre, paréntesis y dos puntos. Las instrucciones de la función van con sangría. La función se ejecuta cuando la llamamos por su nombre.

```python
def saludar():
    print("Hola")

saludar()
saludar()
```

Definir la función no ejecuta su contenido; las dos llamadas hacen que se muestre el saludo dos veces.

## 2. Parámetros: dar datos a una función

Un parámetro permite que la función reciba un dato y lo use. Así, una misma función puede hacer la tarea con valores diferentes.

```python
def dibujar_cuadrado(tortuga, lado):
    for repeticion in range(4):
        tortuga.forward(lado)
        tortuga.left(90)
```

`tortuga` y `lado` son parámetros. Al llamar a la función, proporcionamos los valores correspondientes:

```python
dibujar_cuadrado(tortuga, 50)
dibujar_cuadrado(tortuga, 90)
```

En este ejemplo el código de dibujo se reutiliza con dos tamaños.

## 3. Devolver un resultado

Algunas funciones calculan y devuelven un valor con `return`. Ese valor se puede guardar en una variable o utilizar en otra operación.

```python
def doble(numero):
    return numero * 2

resultado = doble(6)
print(resultado)  # 12
```

No todas las funciones necesitan devolver algo. La función que dibuja un cuadrado realiza una acción; no necesita `return`.

## 4. Ejemplo completo: varios cuadrados

```python
import turtle

def dibujar_cuadrado(tortuga, lado, color):
    tortuga.color(color)
    for repeticion in range(4):
        tortuga.forward(lado)
        tortuga.left(90)

pantalla = turtle.Screen()
pantalla.title("Cuadrados con funciones")
tortuga = turtle.Turtle()
tortuga.speed(5)

dibujar_cuadrado(tortuga, 40, "red")
tortuga.penup()
tortuga.forward(60)
tortuga.pendown()
dibujar_cuadrado(tortuga, 70, "blue")

turtle.done()
```

La función concentra las instrucciones necesarias para dibujar un cuadrado. El programa principal decide cuándo llamarla y qué valores pasarle.

## 5. Proyecto guiado: una fila de figuras

Podemos combinar una lista, `enumerate`, un bucle y una función. Cada llamada dibuja una figura con tamaño y color propios.

```python
import turtle

def dibujar_cuadrado(tortuga, lado, color):
    tortuga.color(color)
    for repeticion in range(4):
        tortuga.forward(lado)
        tortuga.left(90)

tortuga = turtle.Turtle()
tortuga.speed(5)
longitudes = [30, 50, 70]
colores = ["red", "green", "blue"]

for posicion, longitud in enumerate(longitudes):
    dibujar_cuadrado(tortuga, longitud, colores[posicion])
    tortuga.penup()
    tortuga.forward(longitud + 20)
    tortuga.pendown()

turtle.done()
```

El bucle recorre los tamaños. `enumerate` permite obtener la posición para elegir el color correspondiente, y la función evita repetir el código de los cuatro lados.

## 6. Ejercicios

### Ejercicio 1 · Función para un triángulo

Define `dibujar_triangulo(tortuga, lado, color)`. La función debe cambiar el color y dibujar tres lados con giros de 120 grados. Llámala con dos longitudes diferentes.

### Ejercicio 2 · Figuras en una lista

Utiliza una lista de colores y `enumerate` para llamar varias veces a tu función de triángulo. Cambia la longitud según la posición.

### Ejercicio 3 · Personaliza el proyecto

Amplía el ejemplo de cuadrados: añade al menos una figura, cambia la lista de colores o escribe una segunda función para dibujar otra figura.

## Entregable de la sesión

Guarda `sesion4_nombre.py` con un dibujo propio compuesto por al menos tres figuras. El programa debe definir y llamar una función con parámetros, e incluir un bucle que recorra una lista de tamaños o colores.

**Antes de entregar, comprueba:** la función está definida antes de llamarla, el archivo se ejecuta en Thonny y las figuras tienen variaciones visibles.
