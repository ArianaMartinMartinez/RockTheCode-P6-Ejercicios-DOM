//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const btn = document.querySelector('.showme');
console.log('Botón show me', btn);

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const pillado = document.querySelector('#pillado');
console.log('h1 pillado', pillado);

//1.3 Usa querySelector para mostrar por consola todos los p
const allP = document.querySelectorAll('p');
console.log('Todos los p', allP);

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const allPokemon = document.querySelectorAll('.pokemon');
console.log('Todos los pokemon', allPokemon);

/*1.5 Usa querySelector para mostrar por consola todos los elementos con 
el atributo data-function="testMe".*/
const allTestMe = document.querySelectorAll('[data-function="testMe"]');
console.log('Todos los elementos con el atributo', allTestMe);

/*1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe".*/
const thirdTestMe = document.querySelectorAll('[data-function="testMe"]')[2];
console.log('Tercer personaje con el atributo', thirdTestMe);