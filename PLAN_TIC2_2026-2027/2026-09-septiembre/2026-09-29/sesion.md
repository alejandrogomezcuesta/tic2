# Sesión 3 - 29/09/2026

**Unidad:** T1, decisiones. **Saberes:** TICO.2.A.1.3. **Criterio:** 5.1.

## Teoría breve
`if`, `elif` y `else` permiten que el flujo dependa de una condicion. `==` compara, `=` asigna. Las condiciones se combinan con `and`, `or` y `not`; la sangría delimita cada bloque.

**Enlace original:** [Tema 1, 1.3.1](https://lopegonzalez.es/eso-y-bachillerato/tic-ii-2o-bachillerato/tema-1-programacion/#131-condicionales)

## Ejemplo guíado
```python
nota = float(input("Nota: "))
if nota < 0 or nota > 10:
    print("Nota no valida")
elif nota >= 5:
    print("Aprobado")
else:
    print("Pendiente")
```

## Desarrollo de 60 minutos
- 0-10: tarjetas de situaciones: decidir si requieren una o varias ramas.
- 10-20: trazado en pizarra de una condicion y errores tipicos.
- 20-48: reto individual: validador de acceso a una actividad con edad, permiso y horario ficticios.
- 48-55: prueba cruzada con cuatro casos frontera.
- 55-60: explicar por escrito por que el orden de las ramas importa.

## Tarea
`clasificador.py`: pedir una temperatura y mostrar frio, templado o calor; rechazar valores imposibles entre -50 y 60. Incluir cuatro pruebas, incluidos los limites.

**Evidencia:** código y tabla de casos. **Apoyo:** diagrama de flujo. **Ampliación:** convertir el programa en una función.
