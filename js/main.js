//Se precisa un algoritmo que reciba por prompt el mail del usuario y que valide si este mail contiene un "@". Para ello se precisará un bucle que pueda recorrer cada caracter de este valor y que en base a una condición, refleje como alerta si "Es un mail válido" o "Es un mail inválido", en el caso de que no contenga "@".

/* let email = prompt("Ingrese su correo email");
let esValido = false;

for (let i = 0; i < email.length; i++){
    if (email[i] === "@" ) {
        esValido = true;
    }
}

if (esValido) {
    alert("Es un mail válido");
  } else {
    alert("Es un mail inválido");
  } */

  //Se precisa un algoritmo que pida a través de un prompt el teléfono celular del usuario (ej: 1123456789 ) y que verifique, mediante un bucle, si este contiene 10 caracteres. Se necesitará una variable acumuladora que sume 1 cada vez que el bucle recorra cada uno de los valores de este dato. Luego de utilizar este valor, se deberá realizar una estructura que valide si el teléfono del usuario tiene 10 caracteres, si es así, se deberá mostrar una alerta que diga: "Su teléfono ingresado es válido", en caso contrario, se deberá mostrar una alerta que diga: "Su teléfono ingresado es inválido".

/*   let telCel = prompt("ingrese su numero de telefono celular")
  let css = 0;
  
  for (let i = 0; i < telCel.length; i++) {
    css = css+1
  }

  if (css === 10) {
    alert("su numero telefonico es valido");
} else {
    alert ("su numero telefonico es invalido");
} */

//4) Se precisan de un bucle que se inicialice en 100 e itere hasta 250. Este debe contener una estructura condicional que verifique si el número es par o impar. Para el caso par, se deberá visualizar en consola la raíz cuadrada del valor, para ello usar el método Math.sqrt()

for (let i = 100; i <= 250; i++) {
    if (i % 2 === 0) {
      let raizCuadrada = Math.sqrt(i);
      console.log(`La raíz cuadrada de ${i} es ${raizCuadrada}`);
    } else {
        let potencia = Math.pow(i, 2);
        console.log(`El número ${i} elevado a la potencia 2 es ${potencia}`);
      }
    }
  
  