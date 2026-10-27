# Sesión 1 · Thonny, Turtle y primeros bucles

**Duración:** 1 hora
**Objetivo:** conocer el entorno de trabajo, dibujar con Turtle y comprender por qué un bucle permite repetir instrucciones.

## Propuesta de tiempos

| Tiempo | Actividad |
| --- | --- |
| 0–10 min | Abrir Thonny, crear y guardar un programa |
| 10–20 min | Conocer la ventana del editor, la Shell y los controles |
| 20–35 min | Dibujar con Turtle y probar sus instrucciones |
| 35–45 min | Repetir instrucciones manualmente y con `for` |
| 45–60 min | Ejercicio y entrega |

## 1. Thonny: nuestro entorno de programación

Thonny es un IDE (*entorno de desarrollo integrado*): una aplicación que reúne las herramientas necesarias para escribir y ejecutar programas Python.

- **Editor:** zona donde escribimos y guardamos el código.
- **Shell:** zona donde aparecen resultados, mensajes y errores. También permite probar instrucciones sencillas.
- **Run / Ejecutar (F5):** ejecuta el programa abierto.
- **Stop / Detener:** para un programa que sigue ejecutándose.
- **Guardar:** conserva el programa en un archivo con extensión `.py`.

### Primeros pasos

1. Abre Thonny y crea un archivo nuevo.
2. Escribe el programa de ejemplo de esta sesión.
3. Guarda el archivo con un nombre reconocible, por ejemplo `sesion1_figura.py`.
4. Pulsa **F5** o el botón **Run**.
5. Si aparece un error, lee el mensaje de la Shell y revisa la línea indicada.

En un ordenador del aula, puede que Python ya esté configurado. Si Thonny pide elegir un intérprete, selecciona el Python instalado y autorizado por el centro. No hace falta instalar `turtle`: forma parte de la biblioteca estándar de Python. La ventana gráfica de Turtle necesita que el sistema disponga de soporte gráfico.

## 2. La biblioteca Turtle

Una **biblioteca** es código ya preparado que podemos utilizar en nuestros programas. `turtle` controla una tortuga que se mueve por una ventana y dibuja al avanzar con el lápiz bajado.

```python
import turtle

pantalla = turtle.Screen()
pantalla.title("Mi primer dibujo")

tortuga = turtle.Turtle()
tortuga.forward(100)
tortuga.left(90)
tortuga.forward(100)

turtle.done()
```

`import turtle` permite utilizar la biblioteca. `Screen()` crea la ventana y `Turtle()` crea la tortuga que dibuja. `forward(100)` avanza 100 unidades y `left(90)` gira 90 grados a la izquierda. `turtle.done()` mantiene abierta la ventana al terminar.

| Instrucción | Acción |
| --- | --- |
| `tortuga.forward(distancia)` | Avanza la distancia indicada |
| `tortuga.backward(distancia)` | Retrocede |
| `tortuga.left(grados)` | Gira a la izquierda |
| `tortuga.right(grados)` | Gira a la derecha |
| `tortuga.penup()` | Se mueve sin dibujar |
| `tortuga.pendown()` | Baja el lápiz para volver a dibujar |
| `tortuga.color("blue")` | Cambia el color del lápiz |
| `tortuga.speed(3)` | Ajusta la velocidad de dibujo |

Los nombres de las instrucciones distinguen mayúsculas y minúsculas: `forward` no es lo mismo que `Forward`.

## 3. ¿Para qué sirven los bucles?

Un bucle repite un bloque de instrucciones. Sin bucle, para dibujar un cuadrado tendríamos que escribir varias veces `forward` y `left`. Con un bucle, indicamos cuántas repeticiones queremos:

```python
import turtle

tortuga = turtle.Turtle()

for repeticion in range(4):
    tortuga.forward(100)
    tortuga.left(90)

turtle.done()
```

`for` inicia el bucle y las instrucciones con sangría forman su bloque. `range(4)` produce cuatro repeticiones. La variable `repeticion` toma los valores `0`, `1`, `2` y `3`; en este ejemplo no necesitamos usarla, pero el bucle la utiliza para contar las vueltas.

La sangría es obligatoria: las instrucciones que se repiten deben quedar alineadas entre sí y desplazadas respecto a `for`.

### Pasos del bucle

En cada vuelta se ejecutan, en orden, las instrucciones del bloque. Después, Python vuelve a la cabecera del bucle. Cuando se han completado las cuatro vueltas, continúa con la primera instrucción que no está dentro del bloque.

## 4. Ejercicios

### Ejercicio 1 · Completa el recorrido

Modifica el primer programa para que la tortuga avance 120 unidades, gire a la derecha 90 grados y avance otras 60. Prueba también `backward`.

### Ejercicio 2 · Un cuadrado

Ejecuta el ejemplo del cuadrado. Cambia la longitud de los lados y el color. Comprueba qué ocurre si cambias `range(4)` por `range(3)`.

### Ejercicio 3 · Un triángulo

Partiendo del cuadrado, crea un triángulo equilátero. Necesitarás repetir tres lados y girar 120 grados en cada vuelta. ¿Qué valor de `range` debes usar?

## Entregable de la sesión

Guarda un archivo llamado `sesion1_nombre.py` que dibuje un triángulo de tres lados con Turtle. El programa debe usar un bucle `for`, mostrar un color elegido por ti y terminar con `turtle.done()`.

**Antes de entregar, comprueba:** el archivo tiene extensión `.py`, se ejecuta en Thonny y el triángulo aparece completo.
