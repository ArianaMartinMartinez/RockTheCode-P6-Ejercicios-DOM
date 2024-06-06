//1.1 Inserta dinamicamente en un html un div vacio con javascript.
const divVacio = document.createElement('div');
document.body.appendChild(divVacio);

//1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const divP = document.createElement('div');
const p = document.createElement('p');

divP.appendChild(p);
document.body.appendChild(divP);

/*1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
loop con javascript.*/
const divPLoop = document.createElement('div');

for(let i=0; i<6; i++) {
	const p = document.createElement('p');
	divPLoop.appendChild(p);
}

document.body.appendChild(divPLoop);

/*1.4 Inserta dinamicamente con javascript en un html una p con el 
texto 'Soy dinámico!'.*/
const dinamic = document.createElement('p');
dinamic.textContent = 'Soy dinámico!';

document.body.appendChild(dinamic);

//1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector('.fn-insert-here');
h2.textContent = 'Wubba Lubba dub dub';

/*1.6 Basandote en el siguiente array crea una lista ul > li con 
los textos del array.*/
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement('ul');

for(let i=0; i<apps.length; i++) {
	const li = document.createElement('li');
	li.textContent = apps[i];
	ul.appendChild(li);
}

document.body.appendChild(ul);

//1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const removeElements = document.querySelectorAll('.fn-remove-me');

for(const element of removeElements) {
	element.remove();
}

/*1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
Recuerda que no solo puedes insertar elementos con .appendChild.*/
const allDiv = document.querySelectorAll('div');
const midP = document.createElement('p');

midP.textContent = 'Voy en medio!';

document.body.insertBefore(midP, allDiv[1]);

/*1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
.fn-insert-here*/
const insertDiv = document.querySelectorAll('div.fn-insert-here');

for(const div of insertDiv) {
	const p = document.createElement('p');
	p.textContent = 'Vot dentro!';
	div.appendChild(p);
}