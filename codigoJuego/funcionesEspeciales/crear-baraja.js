import _ from 'underscore';

//Creamos la baraja mezclada con el método shuffle de underscore
//Ponemos el argumento letras para que al al importar la función pueda crear la baraja  

/**
 * 
 * @param {Array<string>}  deck 
 * @param {Array<string>} letras Ejemplo [A;B;C]
 * @returns {array}
 */
 export const crearDeck = (deck,letras)=>{
    for(let i = 2; i<=10;i++){
        deck.push(i + 'C');
        deck.push(i + 'D');
        deck.push(i + 'H');
        deck.push(i + 'S');
    }
    for(let letra of letras){
        deck.push(letra + 'C');
        deck.push(letra + 'D');
        deck.push(letra + 'H');
        deck.push(letra + 'S');
    }
    deck = _.shuffle(deck);
    return deck;
}
//export default crearDeck;