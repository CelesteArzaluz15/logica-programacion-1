const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numeros = [];

function pedirNumero(i) {
  rl.question(`Ingresa el número ${i + 1}: `, (num) => {
    numeros.push(Number(num));

    if (numeros.length < 3) {
      pedirNumero(i + 1);
    } else {
      rl.close();
      procesarNumeros(numeros);
    }
  });
}

function procesarNumeros(nums) {
  if (nums.some(isNaN)) {
    console.log("Debes ingresar solo números.");
    return;
  }

  const [a, b, c] = nums;

  // Contador de ocurrencias
  const conteo = {};

  nums.forEach(num => {
    conteo[num] = (conteo[num] || 0) + 1;
  });

  const valoresRepetidos = Object.entries(conteo).filter(([num, count]) => count > 1);

  // Mensaje según repeticiones
  if (valoresRepetidos.length === 1 && valoresRepetidos[0][1] === 3) {
    console.log(`Los tres números son iguales: ${valoresRepetidos[0][0]}`);
  } else if (valoresRepetidos.length >= 1) {
    valoresRepetidos.forEach(([num, count]) => {
      console.log(`El número ${num} se repite ${count} veces.`);
    });
  } else {
    console.log("Todos los números son diferentes.");
  }

  // Ordenamientos
  const mayorAMenor = [...nums].sort((x, y) => y - x);
  const menorAMayor = [...nums].sort((x, y) => x - y);

  console.log("De mayor a menor:", mayorAMenor.join(", "));
  console.log("De menor a mayor:", menorAMayor.join(", "));
}

pedirNumero(0);
