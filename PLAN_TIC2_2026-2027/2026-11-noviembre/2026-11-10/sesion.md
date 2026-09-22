# Sesion 13 - 10/11/2026

**Unidad:** T1, clases y objetos. **Saberes:** TICO.2.A.1.7. **Criterio:** 5.1.

## Teoria breve
Una clase es un molde; un objeto es una instancia. Los atributos representan estado y los metodos comportamiento. La POO ayuda a agrupar datos y operaciones relacionadas.

**Enlace original:** [Tema 1, 1.7.1](https://lopegonzalez.es/eso-y-bachillerato/tic-ii-2o-bachillerato/tema-1-programacion/#171-clases-y-objetos)

## Ejemplo guiado
```python
class Libro:
    def __init__(self, titulo, autor):
        self.titulo = titulo
        self.autor = autor

    def ficha(self):
        return f"{self.titulo} - {self.autor}"
```

## Desarrollo de 60 minutos
- 0-8: modelar una bicicleta con atributos y metodos.
- 8-20: explicar clase, instancia, `self` y metodo.
- 20-48: crear `Libro` y tres objetos; añadir `ficha` y `prestar`.
- 48-55: probar estados antes y despues de prestar.
- 55-60: distinguir atributo de accion.

## Tarea
Crear una clase `Libro` con titulo, autor, paginas y disponibilidad; incluir metodos `info`, `prestar` y `devolver`.

**Evidencia:** codigo y dos ejecuciones. **Apoyo:** diagrama de clase. **Ampliacion:** impedir prestar un libro ya prestado.
