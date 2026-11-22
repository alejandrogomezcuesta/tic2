# Notas

| Equipo | Calificación | Observaciones y penalización |
|---|---:|---|
| aulainf01.local | 0/10 provisional | No hay archivos de ejercicios para evaluar. |
| aulainf02.local | 9/10 | Ejercicio 1: 5/5. Ejercicio 2: 4/5; `range(1,11)` omite el 0 (-1). |
| aulainf03.local | 9/10 | Ejercicio 1: 5/5. Ejercicio 2: 4/5; `range(0,10)` omite el 10 (-1). |
| aulainf04.local | 7/10 | Ejercicio 1: 3/5; las operaciones están intercambiadas, así que no obtiene los puntos de ninguna de las dos ramas (-2). Ejercicio 2: 4/5; empieza en 1 y omite el 0 (-1). |
| aulainf05.local | 2/10 | Ejercicio 1: 2/5; usar `int` no admite decimales (-1) y las operaciones están intercambiadas (-2). Ejercicio 2: 0/5; error de sintaxis. |
| aulainf06.local | 0/10 provisional | No hay archivos de ejercicios para evaluar. |
| aulainf07.local | 0/10 provisional | No hay archivos de ejercicios para evaluar. |
| aulainf08.local | 1/10 | Ejercicio 1: 0/5; las entradas son texto y las compara con opciones numéricas, por lo que no ejecuta las operaciones. Ejercicio 2: 1/5; pide un valor, pero no genera ni muestra la tabla. |
| aulainf09.local | 9/10 | Ejercicio 1: 4/5; convierte los operandos a enteros y pierde los decimales (-1). Ejercicio 2: 5/5. |
| aulainf10.local | 9/10 | Ejercicio 1: 4/5; convierte los operandos a enteros y pierde los decimales (-1). Ejercicio 2: 5/5. |
| aulainf11.local | 0/10 provisional | No hay archivos de ejercicios para evaluar. |
| aulainf12.local | 0/10 provisional | No hay archivos de ejercicios para evaluar. |
| aulainf13.local | 0/10 provisional | No hay archivos de ejercicios para evaluar. |
| aulainf14.local | 0/10 provisional | No hay archivos de ejercicios para evaluar. |
| aulainf15.local | 0/10 provisional | No hay archivos de ejercicios para evaluar. |
| aulainf16.local | 0/10 provisional | No hay archivos de ejercicios para evaluar. |
| aulainf17.local | 9/10 | Ejercicio 1: 4/5; en la suma imprime `sum` en vez del resultado calculado, por lo que esa rama no muestra la suma (-1). Ejercicio 2: 5/5. |
| aulainf18.local | 9/10 | Ejercicio 1: 5/5. Ejercicio 2: 4/5; muestra solo el producto, no la operación completa (-1). |
| aulainf19.local | 7,5/10 | Ejercicio 1: 5/5. Ejercicio 2: 3/5; el bucle calcula del 1 al 10, omite el 0 (-1) y muestra solo los productos (-1). El primer ejercicio está en `ejercicio.py`: se identifica por su contenido y se descuenta 0,5 por el nombre incorrecto. |
| aulainf20.local | 0/10 provisional | No hay archivos de ejercicios para evaluar. |
| aulainf21.local | 0/10 provisional | No hay archivos de ejercicios para evaluar. |
| aulainf22.local | 9/10 | Ejercicio 1: 5/5. Ejercicio 2: 4/5; el bucle empieza en 1 y omite el 0 (-1). |
| aulainf23.local | 0/10 provisional | No hay archivos de ejercicios para evaluar. |
| aulainf24.local | 8/10 | Ejercicio 1: 4/5; usa `int` para los operandos y no admite decimales (-1). Ejercicio 2: 4/5; muestra solo los productos, no la operación completa (-1). |
| aulainf25.local | 9/10 | Ejercicio 1: 5/5. Ejercicio 2: 4/5; muestra solo los productos, no la operación completa (-1). |
| aulainf26.local | 7/10 | Ejercicio 1: 4/5; usa `int` para los operandos (-1). Ejercicio 2: 4/5; muestra solo los productos (-1). Se identifican `Ej1.py` y `Ej2.py` por su contenido y se descuenta 0,5 por cada nombre incorrecto (-1 total). |
| aulainf27.local | 0/10 provisional | No hay archivos de ejercicios para evaluar. |
| aulainf28.local | 1/10 | Ejercicio 1: 1/5; los operandos se leen como enteros (-1) y la opción se lee como texto, por lo que no coincide con 1 o 2 y no se ejecutan las operaciones (-3). Ejercicio 2: 0/5; error de sintaxis. |
| aulainf29.local | 5/10 | Ejercicio 1: 1/5; no pide los operandos y los deja fijados en 7 y 3 (-2), y las opciones de suma y resta están intercambiadas (-2). Ejercicio 2: 4/5; muestra solo los productos (-1). |
| aulainf30.local | 0/10 provisional | No hay archivos de ejercicios para evaluar. |
| aulainf31.local | 0/10 provisional | No hay archivos de ejercicios para evaluar. |
| aulainf32.local | 9/10 | Ejercicio 1: 4/5; usa `int` para los operandos y no admite decimales (-1). Ejercicio 2: 5/5. |

## Resumen de errores encontrados

- **Operaciones intercambiadas:** opción 1 debe restar y opción 2 sumar. Ocurre en `aulainf04.local`, `aulainf05.local` y `aulainf29.local`.
- **Operandos sin soporte para decimales:** usar `int` para leer o convertir los operandos. Ocurre en `aulainf05.local`, `aulainf09.local`, `aulainf10.local`, `aulainf24.local`, `aulainf26.local`, `aulainf28.local` y `aulainf32.local`.
- **Entradas de texto comparadas como números:** `input` devuelve texto; si la opción no se convierte, no coincide con los enteros 1 y 2. Ocurre en `aulainf08.local` y `aulainf28.local`.
- **Operandos fijados en el código en vez de pedirlos:** ocurre en `aulainf29.local`.
- **Resultado de suma incorrecto o ausente:** `aulainf17.local` calcula la suma, pero imprime el nombre de la función `sum` en vez del resultado.
- **Falta uno de los extremos del rango:** `aulainf02.local`, `aulainf04.local`, `aulainf19.local` y `aulainf22.local` omiten el 0; `aulainf03.local` omite el 10.
- **Se muestran productos sin la expresión completa:** ocurre en `aulainf18.local`, `aulainf19.local`, `aulainf24.local`, `aulainf25.local`, `aulainf26.local` y `aulainf29.local`.
- **Errores de sintaxis que impiden ejecutar:** ejercicio 2 de `aulainf05.local` y `aulainf28.local`.
- **Nombres de archivo incorrectos:** `aulainf19.local` usa `ejercicio.py` en lugar de `ejercicio1.py`; `aulainf26.local` usa `Ej1.py` y `Ej2.py` en lugar de los nombres exactos requeridos. Se asignaron los ejercicios según el contenido y se aplicó la penalización descrita arriba.

Solo se han considerado los archivos Python que corresponden a los dos ejercicios. No se encontraron otros archivos de entrega que hubiera que incluir en la evaluación. Las carpetas sin archivos se muestran aparte con nota provisional; conviene confirmar si esas entregas faltan antes de cerrar las calificaciones.
