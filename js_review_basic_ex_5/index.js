// **Iteración #5: Función rollDice**

// Crea una función llamada **rollDice()** que reciba como parametro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función.
// Como hemos dicho, que la función use el parametro para simular una tirada de dado y retornar el resultado.
// Si no se te ocurre como hacer un numero aleatorio no te preocupes! busca información sobre la función de javascript **Math.random();**
var numHeads = "4";

function rollDice(numHeads) {
  if (
    numHeads == 4 ||
    numHeads == 6 ||
    numHeads == 8 ||
    numHeads == 10 ||
    numHeads == 12 ||
    numHeads == 20
  ) {
    var numRandom = Math.round(Math.random() * (numHeads - 1) + 1);
    return console.log("El dado con " + numHeads + " caras existe y ha salido el número: " + numRandom);
  
} else {
    console.log("No existe un dado con " + numHeads  + " caras, prueba de nuevo");
  }
}

rollDice(numHeads);
