/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck Ejemplo: ['3H', '7C', '9D', 'JH']
 * @returns {String} retorna una carta
*/

export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}