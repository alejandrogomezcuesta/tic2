# Sesion 6 - 13/10/2026

**Unidad:** T1, listas. **Saberes:** TICO.2.A.1.4. **Criterio:** 5.1.

## Teoria breve
Una lista es ordenada y mutable. Se accede por indice desde cero y se modifica con asignacion. Metodos esenciales: `append`, `remove`, `pop`, `insert`, `len`, `sort`; se puede recorrer con `for`.

**Enlace original:** [Tema 1, 1.4.1](https://lopegonzalez.es/eso-y-bachillerato/tic-ii-2o-bachillerato/tema-1-programacion/#141-listas)

## Ejemplo guiado
```python
tareas = ["estudiar", "entrenar"]
tareas.append("descansar")
for posicion, tarea in enumerate(tareas, start=1):
    print(posicion, tarea)
```

## Desarrollo de 60 minutos
- 0-8: predecir indices y efectos de `append` y `pop`.
- 8-20: demostracion de lista, recorrido y busqueda.
- 20-48: construir un gestor de tareas de consola: listar, anadir, completar y borrar.
- 48-55: prueba por parejas con una lista de casos.
- 55-60: identificar un requisito que falta.

## Tarea
Entregar el gestor de tareas con menu. Debe impedir borrar una tarea inexistente y mostrar cuantas quedan pendientes.

**Evidencia:** codigo y cinco casos de prueba. **Apoyo:** operaciones separadas en funciones opcionales. **Ampliacion:** ordenar por prioridad.
