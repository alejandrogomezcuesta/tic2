# Sesión 10 - 27/10/2026

**Unidad:** T1, módulos y reutilización. **Saberes:** TICO.2.A.1.5. **Criterio:** 5.1.

## Teoría breve
Un módulo es un fichero Python reutilizable. `import` permite usar la biblioteca estándar o una biblioteca propia. Reutilizar evita duplicación y hace posible trabajar por componentes.

**Enlace original:** [Tema 1, 1.5.4-1.5.5](https://lopegonzalez.es/eso-y-bachillerato/tic-ii-2o-bachillerato/tema-1-programacion/#154-bibliotecas-de-funciónes-módulos)

## Ejemplo guíado
`utilidades.py` contiene `es_par(número)` y `formatear_mensaje(texto)`; `principal.py` las importa y prueba.

## Desarrollo de 60 minutos
- 0-8: buscar funciónes conocidas de `math` y `random`.
- 8-20: demostrar módulo propio, importacion y responsabilidad de cada archivo.
- 20-48: separar la calculadora en `operaciónes.py`, `validación.py` y `main.py`.
- 48-55: cambiar una función y observar que el programa principal no se duplica.
- 55-60: lista de ventajas y riesgos de importar con nombres poco claros.

## Tarea
Crear `mimódulo.py` con tres funciónes utiles y un `main.py` que las use. Incluir README de cuatro lineas explicando cómo ejecutar el proyecto.

**Evidencia:** carpeta del proyecto. **Apoyo:** estructura de archivos entregada. **Ampliación:** usar `math` o `datetime` y justificarlo.
