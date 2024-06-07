/*1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.*/
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul = document.createElement('ul');

for(const country of countries) {
	const li = document.createElement('li');
	li.textContent = country;

	ul.appendChild(li);
}

document.body.appendChild(ul);

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const remove = document.querySelector('.fn-remove-me');
remove.remove();

/*1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".*/
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const ulPrintHere = document.createElement('ul');

for(const car of cars) {
	const li = document.createElement('li');
	li.textContent = car;

	ulPrintHere.appendChild(li);
}

document.querySelector('[data-function="printHere"]').appendChild(ulPrintHere);

/*1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.*/
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for(const country of countries2) {
	const div = document.createElement('div');
	const h4 = document.createElement('h4');
	const img = document.createElement('img');

	h4.textContent = country.title;
	img.src = country.imgUrl;

	div.appendChild(h4);
	div.appendChild(img);
	document.body.appendChild(div);
}

/*1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la serie de divs.*/
const btnDeleteLast = document.createElement('button');
btnDeleteLast.textContent = "Elimina el último";

const deleteLast = () => {
	const allDiv = document.querySelectorAll('div');
	allDiv[allDiv.length - 1].remove();
}

btnDeleteLast.addEventListener('click', deleteLast);
document.body.appendChild(btnDeleteLast);

/*1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
divs que elimine ese mismo elemento del html.*/
const allDiv = document.querySelectorAll('div');

for(const div of allDiv) {
	const btn = document.createElement('button');
	btn.textContent = 'Eliminar';

	btn.addEventListener('click', (e) => {
		e.target.parentElement.remove();
	});

	div.appendChild(btn);
}