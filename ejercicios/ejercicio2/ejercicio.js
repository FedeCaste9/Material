/* 
 * Dado un valor saber si es par.
 * 
 * 
 */

function esPar(numero) {
  return numero%2===0;
}

/* 
 * Dado una lista de elementos saber si todos los elementos excepto el primero son pares
 * 
 */
function laColaEsPar(lista) { 
    if(lista.length === 0 || lista.length === 1){
        return false;
    }

    const [n1, ...resto] = lista;

    const allOddOREven = (currentValue) => currentValue %2 === 0;
    return (resto.every(allOddOREven));  
}




module.exports = { esPar, laColaEsPar };