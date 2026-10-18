# Sesión 9 - 26/10/2026

**Unidad:** T1, funciónes. **Saberes:** TICO.2.A.1.5. **Criterio:** 5.1.

## Teoría breve
Una función encapsula una tarea. Se define con `def`, recibe parametros y puede devolver un resultado con `return`. Separar entrada, proceso y salida facilita leer, probar y reutilizar.

**Enlace original:** [Tema 1, 1.5](https://lopegonzalez.es/eso-y-bachillerato/tic-ii-2o-bachillerato/tema-1-programacion/#15-funciónes-y-bibliotecas-de-funciónes)

## Ejemplo guíado
```python
def precio_final(precio, descuento=0):
    return precio * (1 - descuento / 100)

print(precio_final(20, 10))
```

## Desarrollo de 60 minutos
- 0-8: convertir una receta cotidiana en funciónes.
- 8-20: parametros, argumentos, retorno y valores por defecto.
- 20-48: refactorizar la calculadora de la sesión 2 en funciónes pequeñas.
- 48-55: probar cada función con entradas normales y limites.
- 55-60: identificar código repetido que se pueda reutilizar.

## Tarea
Entregar una calculadora modular con funciónes para sumar, restár, multiplicar, dividir y validar division por cero. El programa principal solo coordina el menu.

**Evidencia:** código modular y pruebas. **Apoyo:** firmas de funciónes. **Ampliación:** devolver tambien una explicación de la operación.
