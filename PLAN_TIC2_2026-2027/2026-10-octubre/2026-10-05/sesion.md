# Sesion 4 - 05/10/2026

**Unidad:** T1, bucle `for`. **Saberes:** TICO.2.A.1.3. **Criterio:** 5.1.

## Teoria breve
Un bucle repite instrucciones. `for` recorre una secuencia o un rango conocido. `range(inicio, fin, paso)` no incluye el limite final. Un acumulador guarda resultados parciales.

**Enlace original:** [Tema 1, 1.3.2](https://lopegonzalez.es/eso-y-bachillerato/tic-ii-2o-bachillerato/tema-1-programacion/#132-iterativas)

## Ejemplo guiado
```python
numero = int(input("Numero: "))
for factor in range(1, 11):
    print(f"{numero} x {factor} = {numero * factor}")
```

## Desarrollo de 60 minutos
- 0-8: ejecutar mentalmente tres `range()`.
- 8-20: explicar recorrido, contador y acumulador.
- 20-45: parejas: tabla de multiplicar, suma de 1 a n y cuenta de pares.
- 45-55: ampliar el reto para mostrar solo multiplos de 3.
- 55-60: ticket: diferencia entre repetir n veces y recorrer una lista.

## Tarea
Crear `estadisticas.py`: pedir 8 calificaciones, calcular media, maxima, minima y numero de aprobados. Probar con una lista de valores conocida y documentar el resultado esperado.

**Evidencia:** programa y comprobacion manual. **Apoyo:** plantilla de acumulador. **Ampliacion:** no permitir notas fuera de 0-10.
