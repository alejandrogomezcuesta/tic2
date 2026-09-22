# Sesion 7 - 19/10/2026

**Unidad:** T1, tuplas y conjuntos. **Saberes:** TICO.2.A.1.4. **Criterio:** 5.1.

## Teoria breve
Las tuplas son secuencias ordenadas inmutables; resultan utiles para datos que no deben cambiar. Los conjuntos no mantienen un orden significativo y eliminan duplicados. Sus operaciones principales son union, interseccion y diferencia.

**Enlace original:** [Tema 1, 1.4.2-1.4.3](https://lopegonzalez.es/eso-y-bachillerato/tic-ii-2o-bachillerato/tema-1-programacion/#142-tuplas)

## Ejemplo guiado
```python
musica_a = {"rock", "jazz", "pop"}
musica_b = {"pop", "rap", "jazz"}
print(musica_a & musica_b)
print(musica_a | musica_b)
```

## Desarrollo de 60 minutos
- 0-10: clasificar escenarios: lista, tupla o conjunto.
- 10-20: mostrar inmutabilidad y operaciones de conjuntos.
- 20-45: grupos de tres analizan dos encuestas ficticias de gustos musicales.
- 45-55: calcular gustos comunes, exclusivos y totales sin duplicados.
- 55-60: puesta en comun sobre la eleccion de estructura.

## Tarea
Crear `encuesta.py` con dos conjuntos de intereses y mostrar interseccion, union y diferencias. Explicar en comentarios por que no se usa una lista para el resultado comun.

**Evidencia:** salida y razonamiento. **Apoyo:** tabla de operadores. **Ampliacion:** convertir resultados en listas ordenadas.
