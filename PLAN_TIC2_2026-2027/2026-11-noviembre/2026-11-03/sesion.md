# Sesión 11 - 03/11/2026

**Unidad:** T1, ficheros de texto. **Saberes:** TICO.2.A.1.6. **Criterio:** 5.1.

## Teoría breve
Los ficheros permiten conservar datos entre ejecuciónes. `open` trabaja en modos lectura, escritura y añadir. `with ... as` cierra automaticamente el recurso y evita perdidas por descuido.

**Enlace original:** [Tema 1, 1.6](https://lopegonzalez.es/eso-y-bachillerato/tic-ii-2o-bachillerato/tema-1-programacion/#16-manipulacion-de-archivos)

## Ejemplo guíado
```python
with open("notas.txt", "a", encoding="utf-8") as fichero:
    fichero.write("Nueva linea\n")
```

## Desarrollo de 60 minutos
- 0-10: predecir que ocurre con `r`, `w` y `a`.
- 10-20: escribir, leer y cerrar con `with`.
- 20-48: convertir la agenda en un registro de texto con altas y lectura.
- 48-55: comprobar que el programa conserva informacion al cerrarlo.
- 55-60: explicar por que `w` puede ser peligroso.

## Tarea
Crear `misgrupos.py`: pedir nombres hasta escribir `salir`, guardarlos numerados en `misgrupos.txt` y mostrar el contenido al final. Usar `with` y UTF-8.

**Evidencia:** programa y fichero generado. **Apoyo:** ejemplo de escritura. **Ampliación:** impedir duplicados leyendo el fichero.
