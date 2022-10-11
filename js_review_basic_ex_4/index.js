// **Iteración #4: Métodos findArrayIndex**

// Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y
// un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.
// Haz varios ejemplos y compruebalos.

// Sugerencia de función:
// function findArrayIndex(array, text) {}

// Ej array:
// ["Caracol", "Mosquito", "Salamandra", "Ajolote"];

const animals = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];

var text = "Ajolote";

function findArrayIndex(array, text) {
  let count = 0;
  for (const element of array) {
    count++;
    //contenido del array:
    // console.log(element);
    if (text === element) {
      console.log("Palabra encontrada!! En la posicion: ", array.indexOf(text) + 1);
    } else {
      console.log("No se encuentra la palabra en la posicion: ", count);
    }
  }
}

findArrayIndex(animals, text);
