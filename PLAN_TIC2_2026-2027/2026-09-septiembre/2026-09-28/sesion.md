# Sesión 2 - 28/09/2026

**Unidad:** T1, variables, tipos y entrada/salida. **Saberes:** TICO.2.A.1.2. **Criterio:** 5.1.

## Teoría breve
Los datos tienen tipo: enteros, decimales, texto y booleaños. Una variable asocia un nombre a un valor. `input()` devuelve texto; hay que convertir con `int()` o `float()`. Los operadores aritmeticos y de comparacion producen expresiones.

**Enlace original:** [Tema 1, 1.2](https://lopegonzalez.es/eso-y-bachillerato/tic-ii-2o-bachillerato/tema-1-programacion/#12-fundamentos)

## Ejemplo guíado
```python
nombre = input("Nombre: ")
edad = int(input("Edad: "))
print(f"{nombre} tendra {edad + 1} el próximo ano")
```

## Desarrollo de 60 minutos
- 0-8: reto oral: clasificar valores cómo texto, número o booleano.
- 8-20: demostración de variables, conversiones, operadores y f-strings.
- 20-48: parejas resuelven una calculadora de precio con IVA y descuento; prueban tres casos.
- 48-55: comparar resultados y detectar una entrada invalida.
- 55-60: mini cuestionario de cinco preguntas.

## Tarea
Crear `calculadora.py`: pedir precio, porcentaje de descuento y unidades; mostrar subtotal, descuento y total con dos decimales. Anotar que tipos usa cada variable.

**Evidencia:** programa y tabla de tres pruebas. **Apoyo:** esquema de entrada-proceso-salida. **Ampliación:** validar que precio y unidades no sean negativos.
