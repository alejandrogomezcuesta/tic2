# Ejercicios de la introducción

Crea 4 anvilworks, uno por cada ejercicio.

Los ejercicios se tienen que llamar así: NombreApellido-Título. 

Por ejemplo, para estos ejercicios, nómbralos así:

1. `Alejandro Gomez - Suma de dos números`
2. `Alejandro Gómez - Mayor de edad`
3. `Alejandro Gómez - Descuento de la tienda`
4. `Alejandro Gómez - Conversor de temperatura`

## Ejercicio 1 · Suma de dos números

Dos TextBox (número 1 y número 2), un botón "Sumar" y un Label que muestre "La suma es ...". Pista: convierte los dos datos con `float()`. Ampliación: añade un segundo botón "Multiplicar".

## Ejercicio 2 · ¿Mayor de edad?

Un TextBox para la edad y un botón "Comprobar". Si la edad es 18 o más, el Label dice "Eres mayor de edad"; si no, dice "Eres menor de edad: te faltan X años". Pista: los años que faltan son `18 - edad`.

## Ejercicio 3 · Descuento en la tienda

Un TextBox para el precio. Si el precio es 100 o más, se aplica un 10 % de descuento; si no, un 5 %. Muestra el descuento y el precio final con dos decimales. Pista: `round(valor, 2)`.

## Ejercicio 4 · Conversor de temperatura

Un DropDown con las opciones "Celsius a Fahrenheit" y "Fahrenheit a Celsius" (en Properties, `items`, una por línea), un TextBox para la temperatura y un botón "Convertir". F = C × 9/5 + 32 y C = (F − 32) × 5/9. Pista: la opción elegida se lee con `self.ej4_drop.selected_value`, y se compara con un `if`.