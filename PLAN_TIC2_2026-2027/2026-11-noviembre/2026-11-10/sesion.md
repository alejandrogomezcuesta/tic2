# Sesión 13 - 10/11/2026

**Unidad:** T1, clases y objetos. **Saberes:** TICO.2.A.1.7. **Criterio:** 5.1.

## Teoría breve
Una clase es un molde; un objeto es una instancia. Los atributos representan estádo y los metodos comportamiento. La POO ayuda a agrupar datos y operaciónes relacionadas.

**Enlace original:** [Tema 1, 1.7.1](https://lopegonzalez.es/eso-y-bachillerato/tic-ii-2o-bachillerato/tema-1-programacion/#171-clases-y-objetos)

## Ejemplo guíado
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
- 20-48: crear `Libro` y tres objetos; añadir `ficha` y `prestár`.
- 48-55: probar estádos antes y después de prestár.
- 55-60: distinguir atributo de acción.

## Tarea
Crear una clase `Libro` con titulo, autor, paginas y disponibilidad; incluir metodos `info`, `prestár` y `devolver`.

**Evidencia:** código y dos ejecuciónes. **Apoyo:** diagrama de clase. **Ampliación:** impedir prestár un libro ya prestádo.
