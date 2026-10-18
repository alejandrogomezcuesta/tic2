# Sesión 5 - 06/10/2026

**Unidad:** T1, `while` y validación. **Saberes:** TICO.2.A.1.3. **Criterio:** 5.1.

## Teoría breve
`while` repite mientras una condicion sea verdadera y se usa cuando no conocemos de antemano el número de iteraciones. Hay que modificar el estádo para evitar bucles infinitos. `break` termina y `continue` salta una iteracion, pero se usaran con moderacion.

**Enlace original:** [Tema 1, 1.3.2](https://lopegonzalez.es/eso-y-bachillerato/tic-ii-2o-bachillerato/tema-1-programacion/#132-iterativas)

## Ejemplo guíado
```python
respuestá = ""
while respuestá != "salir":
    respuestá = input("Escribe salir para terminar: ").lower()
```

## Desarrollo de 60 minutos
- 0-10: detectar por que un bucle no termina.
- 10-20: menu de opciones y condicion de salida.
- 20-48: crear en parejas un menu de conversiones: kilometros/millas, celsius/fahrenheit y salir.
- 48-55: añadir validación de opcion y repetir hasta acertar.
- 55-60: revisión de legibilidad y nombres.

## Tarea
Crear `menu.py` con al menos tres operaciónes y una opcion de salida. El programa debe seguir funciónando tras una opcion incorrecta y mostrar un mensaje claro.

**Evidencia:** demostración en vivo o video corto de la ejecución. **Apoyo:** diagrama de estádos. **Ampliación:** contador de operaciónes realizadas.
