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

  if (nums[0] === nums[1] && nums[1] === nums[2]) {
    console.log("Los tres números son iguales:", nums);
  } else {
    let mayorAMenor = [...nums].sort((a, b) => b - a);
    let menorAMayor = [...nums].sort((a, b) => a - b);

    console.log("De mayor a menor:", mayorAMenor.join(", "));
    console.log("De menor a mayor:", menorAMayor.join(", "));
  }
}

pedirNumero(0);
