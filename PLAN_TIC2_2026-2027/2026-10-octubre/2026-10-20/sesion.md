# Sesión 8 - 20/10/2026

**Unidad:** T1, diccionarios. **Saberes:** TICO.2.A.1.4. **Criterio:** 5.1.

## Teoría breve
Un diccionario relaciona claves unicas con valores. Permite consultar, añadir, modificar y eliminar usando la clave. `get`, `keys`, `values` e `items` facilitan accesos y recorridos.

**Enlace original:** [Tema 1, 1.4.4](https://lopegonzalez.es/eso-y-bachillerato/tic-ii-2o-bachillerato/tema-1-programacion/#144-diccionarios)

## Ejemplo guíado
```python
agenda = {"Ana": "ana@ejemplo.test", "Luis": "luis@ejemplo.test"}
agenda["Marta"] = "marta@ejemplo.test"
print(agenda.get("Ana", "No existe"))
```

## Desarrollo de 60 minutos
- 0-8: reto: modelar una ficha de videojuego y una agenda.
- 8-20: explicar clave, valor, actualizacion y recorrido.
- 20-48: crear una agenda sin datos reales: añadir, consultar, modificar y eliminar.
- 48-55: introducir una clave inexistente y mejorar el mensaje.
- 55-60: comparar diccionario y lista de tuplas.

## Tarea
`agenda.py`: menu con cuatro operaciónes y contador de contactos. Usar `get` o comprobar la clave antes de consultar.

**Evidencia:** código y tabla de decisiones. **Apoyo:** diccionario inicial proporcionado. **Ampliación:** guardar varias etiquetas por contacto con una lista.
