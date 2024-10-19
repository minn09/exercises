# Ejercicios de JavaScript

## **Ejercicio 1 - Fundamentos: Variables y Tipos de Datos** X

- Crea una función que tome una cantidad variable de argumentos de tipo `number`, y devuelva su suma. Si se pasa un argumento que no sea `number`, la función debe ignorarlo.

## **Ejercicio 2 - Funciones y Arrays** X

- Escribe una función que reciba un array de objetos con propiedades `nombre` y `edad`, y devuelva un nuevo array con los nombres de las personas mayores de 18 años, ordenado alfabéticamente.

## **Ejercicio 3 - Destructuración y Operador Spread** X

- Dado el siguiente objeto:
  `const persona = { nombre: 'Juan', edad: 30, direccion: { ciudad: 'Madrid', pais: 'España' } };`
  Crea una función que reciba un objeto similar y que:
  1. Devuelva un nuevo objeto, pero con la ciudad cambiada a 'Barcelona'.
  2. Devuelva la edad utilizando destructuración.

## **Ejercicio 4 - Funciones de Orden Superior (map, filter, reduce)**

- Crea un array de objetos que represente productos con propiedades `nombre`, `precio` y `categoria`. Escribe una función que:
  1. Devuelva un array con los nombres de los productos cuyo precio sea mayor a 50.
  2. Calcule el precio total de los productos de una determinada categoría.

## **Ejercicio 5 - Objetos y Clases**

- Crea una clase `Vehiculo` que tenga propiedades como `marca`, `modelo` y `año`. Luego, crea una subclase `Auto` que herede de `Vehiculo` y tenga una propiedad adicional `puertas`. Implementa un método que describa el vehículo de forma legible.

## **Ejercicio 6 - Asincronía: Promesas y Async/Await**

- Simula una llamada a una API con una promesa que devuelva un objeto después de 2 segundos. Luego, crea una función `async` que haga uso de `await` para obtener y mostrar la respuesta de la API simulada.

## **Ejercicio 7 - Manejo de Errores (Try/Catch)**

- Extiende el ejercicio anterior. Si la llamada a la API tarda más de 1 segundo, la promesa debe fallar con un mensaje de error. Usa `try/catch` para capturar y mostrar el error de forma legible.

## **Ejercicio 8 - Módulos y Scope**

- Divide el ejercicio de la clase `Vehiculo` en dos archivos. El primer archivo debe exportar la clase `Vehiculo`, y el segundo debe importar dicha clase y crear una instancia de un objeto `Auto` que herede de `Vehiculo`.

## **Ejercicio 9 - Closures y Funciones Anidadas**

- Crea una función que devuelva una función interna. La función interna debe tomar un número y sumarlo a un valor inicial que fue pasado a la función externa. Prueba el comportamiento con varias invocaciones de la función interna.

## **Ejercicio 10 - Eventos y Manipulación de DOM (Opcional)**

- (Si ya trabajas con el DOM) Crea una página con tres botones que cambian el contenido de un `div` en función del botón que se presione. Implementa la funcionalidad sin usar React, solo con JavaScript puro.

## **Ejercicio 11 - Operador Rest y Parámetros**

- Escribe una función que reciba una cantidad indefinida de argumentos y devuelva un objeto donde cada argumento sea una propiedad del objeto con el índice como clave.
