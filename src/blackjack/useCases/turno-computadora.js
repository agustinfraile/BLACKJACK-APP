import {pedirCarta, crearCartaHTML, valorCarta} from './index';


/**
 * 
 * @param {Number} puntosMinimos Puntos minimos que la computadora necesita para ganar 
 * @param {HTMLElement} puntosHTML HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemento para mostrar las cartas
 * @param {Array<String>} deck Arreglo de string con las cartas
 */

export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck ) => {

    // si no vienen los puntos minimos
    if( !puntosMinimos ) throw new Error('Puntos minimos son necesario');
    
    // si no vienen los puntos html
    if( !puntosHTML ) throw new Error('Puntos HTML es necesario');
    
    // si no viene el deck
    if( !deck ) throw new Error('Deck es necesario');

    //inicializo en 0 los puntos de la computadora
    let puntosComputadora = 0; 

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML(carta)
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
};