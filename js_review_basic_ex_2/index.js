// **Iteración #2: Mix Fors**

// Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.
const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

function volumeAverage(array) {
  let sum = 0;
  let cont = 0;
  let result = 0;

  for (const user of array) {
    //Iteracion del array
    // console.log(user);

    for (const elements in user.favoritesSounds) {
      //Iteracion del objeto
      // console.log(user.favoritesSounds[elements]);
      sum += user.favoritesSounds[elements]["volume"];
      cont++;
    }
  }

  result = sum / cont;
  console.log("Resultado de la media de volumen: ", result);
}

volumeAverage(users);
