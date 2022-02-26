class Apps {
	constructor(descargas,puntuacion,peso){
		this.descargas = descargas;
		this.puntuacion = puntuacion;
		this.peso = peso;
		this.iniciada = false;
		this.instalada = false;
	}
	abrir(){
		if (this.iniciada == false && this.instalada == true) {
			this.iniciada = true;
			alert("app encendida");
		} 
	} 
	cerrar(){
		if (this.iniciada == true && this.instalada == true) {
			this.iniciada = false;
			alert("app cerrada");
		}
	}
	instalar(){
		if (this.instalada == false) {
			this.instalada = true;
			alert("app instalada correctamente")
		}
	}
	desinstalar(){
		if (this.instalada == true && this.instalada == true) {
			this.instalada = false;
			alert("app desinstalada correctamente")
		}
	}
	appInfo(){
		return `
		Descargas: <b>${this.descargas}</b></br>
		Puntuacion: <b>${this.puntuacion}</b></br>
		Peso: <b>${this.peso}</b></br>
		`
	}
}	


app = new Apps("16.000","5 estrellas","900mb");
app2 = new Apps("1.000","4 estrellas","400mb");
app3 = new Apps("6.000","4.5 estrellas","100mb");
app4 = new Apps("23.000","4.8 estrellas","1gb");
app5 = new Apps("900","5 estrellas","250mb");
app6 = new Apps("17","3.7 estrellas","522mb");
app7 = new Apps("42.981","2.9 estrellas","723mb");


document.write(` 
	${app.appInfo()} <br>
	${app2.appInfo()} <br>
	${app3.appInfo()} <br>
	${app4.appInfo()} <br>
	${app5.appInfo()} <br>
	${app6.appInfo()} <br>
	${app7.appInfo()} <br>
	`);