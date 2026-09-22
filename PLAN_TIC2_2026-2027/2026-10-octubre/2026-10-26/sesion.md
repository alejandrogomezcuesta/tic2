# Sesion 9 - 26/10/2026

**Unidad:** T1, funciones. **Saberes:** TICO.2.A.1.5. **Criterio:** 5.1.

## Teoria breve
Una funcion encapsula una tarea. Se define con `def`, recibe parametros y puede devolver un resultado con `return`. Separar entrada, proceso y salida facilita leer, probar y reutilizar.

**Enlace original:** [Tema 1, 1.5](https://lopegonzalez.es/eso-y-bachillerato/tic-ii-2o-bachillerato/tema-1-programacion/#15-funciones-y-bibliotecas-de-funciones)

## Ejemplo guiado
```python
def precio_final(precio, descuento=0):
    return precio * (1 - descuento / 100)

print(precio_final(20, 10))
```

## Desarrollo de 60 minutos
- 0-8: convertir una receta cotidiana en funciones.
- 8-20: parametros, argumentos, retorno y valores por defecto.
- 20-48: refactorizar la calculadora de la sesion 2 en funciones pequenas.
- 48-55: probar cada funcion con entradas normales y limites.
- 55-60: identificar codigo repetido que se pueda reutilizar.

## Tarea
Entregar una calculadora modular con funciones para sumar, restar, multiplicar, dividir y validar division por cero. El programa principal solo coordina el menu.

**Evidencia:** codigo modular y pruebas. **Apoyo:** firmas de funciones. **Ampliacion:** devolver tambien una explicacion de la operacion.
