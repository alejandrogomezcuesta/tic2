# Sesion 10 - 27/10/2026

**Unidad:** T1, modulos y reutilizacion. **Saberes:** TICO.2.A.1.5. **Criterio:** 5.1.

## Teoria breve
Un modulo es un fichero Python reutilizable. `import` permite usar la biblioteca estandar o una biblioteca propia. Reutilizar evita duplicacion y hace posible trabajar por componentes.

**Enlace original:** [Tema 1, 1.5.4-1.5.5](https://lopegonzalez.es/eso-y-bachillerato/tic-ii-2o-bachillerato/tema-1-programacion/#154-bibliotecas-de-funciones-modulos)

## Ejemplo guiado
`utilidades.py` contiene `es_par(numero)` y `formatear_mensaje(texto)`; `principal.py` las importa y prueba.

## Desarrollo de 60 minutos
- 0-8: buscar funciones conocidas de `math` y `random`.
- 8-20: demostrar modulo propio, importacion y responsabilidad de cada archivo.
- 20-48: separar la calculadora en `operaciones.py`, `validacion.py` y `main.py`.
- 48-55: cambiar una funcion y observar que el programa principal no se duplica.
- 55-60: lista de ventajas y riesgos de importar con nombres poco claros.

## Tarea
Crear `mimodulo.py` con tres funciones utiles y un `main.py` que las use. Incluir README de cuatro lineas explicando como ejecutar el proyecto.

**Evidencia:** carpeta del proyecto. **Apoyo:** estructura de archivos entregada. **Ampliacion:** usar `math` o `datetime` y justificarlo.
