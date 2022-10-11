// **Iteración #6: Función swap**

// Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array.
// La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.

// Sugerencia de array:
// ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

const futvolPlaiers = [
  "Mesirve",
  "Cristiano Romualdo",
  "Fernando Muralla",
  "Ronalguiño",
];

var index1 = "";
var index2 = "";

function swap(array, index1, index2) {
  if (index1 > array.length || index2 > array.length) {
    return console.log("No hay tantas palabras en la lista");
  }

  for (let i = 0; i < array.length; i++) {
    console.log("Palabra: " + array[i] + " Posicion: " + i);
  }
  let valor1 = array[index1];
  let valor2 = array[index2];
  //splice()
  array.splice(index1, 1, valor2);
  array.splice(index2, 1, valor1);

  console.log("Lista Actualizada: ");
  for (const elements of array) {
    console.log(elements);
  }
}

swap(futvolPlaiers, 1, 22);
