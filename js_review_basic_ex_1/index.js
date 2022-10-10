// **Iteración #1: Mix for e includes**

// Dado el siguiente javascript usa forof para recorrer el array de películas,
// genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías.
// Ten en cuenta que las categorías no deberían repetirse.
// Para filtrar las categorías puedes ayudarte de la función **.includes()**

const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  {
    title: "Solo en Whatsapp",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "El gato con guantes",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

const movieCategories = [];

function filmsCategoryFilter(array, updatedArray) {
  for (const elements of array) {
    // console.log("Lista sin actualizar: "+elements["categories"]);
    // console.log(elements);
    for (const attributes of elements["categories"]) {
      // console.log(attributes);
      if (!updatedArray.includes(attributes)) {
        updatedArray.push(attributes);
      }
    }
  }

  console.log("Nuevo Array:");
  console.log(updatedArray);
}

filmsCategoryFilter(movies, movieCategories);
