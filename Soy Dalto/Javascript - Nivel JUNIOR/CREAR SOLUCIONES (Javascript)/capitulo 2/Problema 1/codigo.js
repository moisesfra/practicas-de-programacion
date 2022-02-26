 
 let free = false;

 const validarCliente = (time)=>{
 	let edad = prompt("¿Cúal es tu edad?");
 	if (edad > 18) {
 		if (time >= 2 && time < 7 && free == false) {
 			alert("Pasa, es gratis la entrada solo la 1ra persona despues de las 2 AM.");
 			free = true;
 		} else {
  			alert(`Pasa, son las ${time}:00Hs, pero tienes que pagar la entrada.`);
 		}
 	} else {
 		alert("Mira papi lo lamento, pero eres menor de edad. No puedes entrar.");
 	}

 }

validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);
