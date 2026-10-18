# Sesión 7 - 19/10/2026

**Unidad:** T1, tuplas y conjuntos. **Saberes:** TICO.2.A.1.4. **Criterio:** 5.1.

## Teoría breve
Las tuplas son secuencias ordenadas inmutables; resultan utiles para datos que no deben cambiar. Los conjuntos no mantienen un orden significativo y eliminan duplicados. Sus operaciónes principales son union, intersección y diferencia.

**Enlace original:** [Tema 1, 1.4.2-1.4.3](https://lopegonzalez.es/eso-y-bachillerato/tic-ii-2o-bachillerato/tema-1-programacion/#142-tuplas)

## Ejemplo guíado
```python
musica_a = {"rock", "jazz", "pop"}
musica_b = {"pop", "rap", "jazz"}
print(musica_a & musica_b)
print(musica_a | musica_b)
```

## Desarrollo de 60 minutos
- 0-10: clasificar escenarios: lista, tupla o conjunto.
- 10-20: mostrar inmutabilidad y operaciónes de conjuntos.
- 20-45: grupos de tres analizan dos encuestás ficticias de gustos musicales.
- 45-55: calcular gustos comúnes, exclusivos y totales sin duplicados.
- 55-60: puestá en común sobre la eleccion de estructura.

## Tarea
Crear `encuestá.py` con dos conjuntos de intereses y mostrar intersección, union y diferencias. Explicar en comentarios por que no se usa una lista para el resultado común.

**Evidencia:** salida y razonamiento. **Apoyo:** tabla de operadores. **Ampliación:** convertir resultados en listas ordenadas.
