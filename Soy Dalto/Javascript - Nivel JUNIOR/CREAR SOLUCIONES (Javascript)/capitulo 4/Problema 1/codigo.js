class Calculadora {
	constructor(){

	}

sumar(num1,num2){
	return parseInt(num1) + parseInt(num2);
}
restar(num1,num2){
	return parseInt(num1) - parseInt(num2);
}
multiplicar(num1, num2){
	return parseInt(num1) * parseInt(num2);
}
dividir(num1, num2){
	return parseInt(num1) / parseInt(num2);
}
potenciar(num,exp){
	let numero = num;
	for (var i = 0; i < exp; i++) {
		numero = num**exp;
	}
	return numero;
}
raizCuadrada(num){
	return Math.sqrt(num);
}
raizCubica(num){
	return Math.cbrt(num);
}

}

const calculadora = new Calculadora();
 

alert("¿Qué operación deseas realizar?");
let operacion = prompt("1: suma, 2: resta, 3: multiplicación, 4: división, 5: potenciación, 6: raiz cuadrada, 7: raiz cúbica");

if (operacion == 1) {
	let numero1 = prompt("primer número para sumar");
	let numero2 = prompt("segundo número para sumar");
	resultado = calculadora.sumar(numero1,numero2);
	alert(`tu resultado es ${resultado}`);
}

else if (operacion == 2) {
	let numero1 = prompt("primer número para restar");
	let numero2 = prompt("segundo número para restar");
	resultado = calculadora.restar(numero1,numero2);
	alert(`tu resultado es ${resultado}`);
}

else if (operacion == 3) {
	let numero1 = prompt("primer número para multiplicar");
	let numero2 = prompt("segundo número para multiplicar");
	resultado = calculadora.multiplicar(numero1,numero2);
	alert(`tu resultado es ${resultado}`);
}
else if (operacion == 4) {
	let numero1 = prompt("primer número para dividir");
	let numero2 = prompt("segundo número para dividir");
	resultado = calculadora.dividir(numero1,numero2);
	alert(`tu resultado es ${resultado}`);
}

else if (operacion == 5) {
	let numero1 = prompt("número para potenciar");
	let numero2 = prompt("exponente");
	resultado = calculadora.potenciar(numero1,numero2);
	alert(`tu resultado es ${resultado}`);
}
else if (operacion == 6) {
	let numero1 = prompt("conocer la raiz cuadrada de: ");
	resultado = calculadora.raizCuadrada(numero1);
	alert(`tu resultado es ${resultado}`)
}
else if (operacion == 7) {
	let numero1 = prompt("conocer la raiz cúbica de: ");
	resultado = calculadora.raizCubica(numero1);
	alert(`tu resultado es ${resultado}`)
}


else {
	alert("No se ha encontrado la operación");
}
