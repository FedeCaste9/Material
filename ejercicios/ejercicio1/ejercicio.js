/* 
 * Pasar la primer letra de la palabra a mayuscula y dejar el resto como esta
 * Ejemplo capitalizeFirstLetter("hola") => capitalizeFirstLetter("Hola")
 * Tip: Un caracter entiende toUpperCase(https://www.w3schools.com/jsref/jsref_touppercase.asp)
 */
const _ = require ("lodash");

function capitalizeFirstLetter(palabra) { 
	return _.capitalize (palabra)
}
module.exports = capitalizeFirstLetter;
// Terminado
