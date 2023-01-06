'use strict'
const GI = {
	createElement (tag, atributes) {
		let element = document
		return document.createElement(tag)
	}
}


const to_do = [
    'Alimentar al perro',
    'Estudiar para prueba escrita',
    'Pagar taxes',
    'Pasear a perro',
    'Comprar entradas para el cine',
]

var string = "";
for (var i = 0; i < to_do.length; i++) {
	
	string = '<input type="checkbox" name="chk'+i+'"><label>'+to_do[i]+'</label>';
	
}
var div = document.getElementById("div_container");

console.log(string);