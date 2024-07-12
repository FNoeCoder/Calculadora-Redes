
/**
 * 
 * @param {Number} cantidad La cantidad que se va a sumar a la red antigua
 * @param {Array<Number>} redAntigua La red a la que se le va a sumar la cantidad
 * @returns {Array<Number>} La red con la cantidad sumada
 */
export function sumarARed(cantidad, redAntigua){
    let red = redAntigua.slice();
    let paraOcteto3 = 0;
    let paraOcteto2 = 0;
    let paraOcteto1 = 0;
    let paraOcteto0 = 0;

    if (cantidad > 0 && cantidad <= 255 ){
        paraOcteto3 = cantidad;
    }
    else if ([Math.floor(cantidad / 256) > 0 && Math.floor(cantidad / 256) <= 255]){
        paraOcteto3 = cantidad % 256;
        paraOcteto2 = Math.floor(cantidad / 256);
    }
    red[3] += paraOcteto3;
    red[2] += paraOcteto2;

    if (red[3] > 255){
        red[3] = red[3] % 256;
        red[2] += 1;
    }

    if (red[2] > 255){
        let cantidad255 = Math.floor(red[2] / 256);
        red[2] = red[2] % 256;
        paraOcteto1 = cantidad255;
    }

    red[1] += paraOcteto1;
    red[0] += paraOcteto0;
    return red;
}
/**
 * 
 * @param {String} bits Una cadena de 32 bits
 * @returns {Array<String>} Un array con 4 octetos de 8 bits cada uno
 */
export function separarEnOctetos(bits){
    if (bits.length !== 32) throw new Error("La red binaria no es valida");
    return [
        bits.substring(0,8),
        bits.substring(8,16),
        bits.substring(16,24),
        bits.substring(24,32)
    ]
}
/**
 * 
 * @param {Array<String>} octetos Un array con 4 octetos de 8 bits cada un en binario
 * @returns {Array<Number>} Un array con 4 octetos en decimal
 */
export function octetosBinariosADecimales(octetos){
    return octetos.map(octeto => parseInt(octeto, 2));
}