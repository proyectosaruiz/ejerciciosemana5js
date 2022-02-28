"use strict";
function contraseñaDe0a100(contraseñaCorrecta, intentos) {
  for (let intentoActual = 0; intentoActual < intentos; intentoActual++) {
    let codigoUsuario = prompt(
      `Introduce un número del 0 al 100, tienes ${
        intentos - intentoActual
      } intentos`
    );

    if (contraseñaCorrecta === codigoUsuario) {
      alert("Contraseña Correcta");
      break;
    } else if (intentoActual === intentos - 1) {
      alert("Ha perdido");
    }
  }
}

contraseñaDe0a100("099", 5);
