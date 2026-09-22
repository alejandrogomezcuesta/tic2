# Sesion 5 - 06/10/2026

**Unidad:** T1, `while` y validacion. **Saberes:** TICO.2.A.1.3. **Criterio:** 5.1.

## Teoria breve
`while` repite mientras una condicion sea verdadera y se usa cuando no conocemos de antemano el numero de iteraciones. Hay que modificar el estado para evitar bucles infinitos. `break` termina y `continue` salta una iteracion, pero se usaran con moderacion.

**Enlace original:** [Tema 1, 1.3.2](https://lopegonzalez.es/eso-y-bachillerato/tic-ii-2o-bachillerato/tema-1-programacion/#132-iterativas)

## Ejemplo guiado
```python
respuesta = ""
while respuesta != "salir":
    respuesta = input("Escribe salir para terminar: ").lower()
```

## Desarrollo de 60 minutos
- 0-10: detectar por que un bucle no termina.
- 10-20: menu de opciones y condicion de salida.
- 20-48: crear en parejas un menu de conversiones: kilometros/millas, celsius/fahrenheit y salir.
- 48-55: anadir validacion de opcion y repetir hasta acertar.
- 55-60: revision de legibilidad y nombres.

## Tarea
Crear `menu.py` con al menos tres operaciones y una opcion de salida. El programa debe seguir funcionando tras una opcion incorrecta y mostrar un mensaje claro.

**Evidencia:** demostracion en vivo o video corto de la ejecucion. **Apoyo:** diagrama de estados. **Ampliacion:** contador de operaciones realizadas.
