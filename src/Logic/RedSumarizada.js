import { Red } from "./Red.js";
import { sumarARed, separarEnOctetos, octetosBinariosADecimales } from "./utils.js"


/**
 * Clase Red.
 * @class
 */
export class RedSumarizada{
    #redes = [];
    #datosRedes = [];
    #redSumarizada = [];
    #redBinariaSumarizada = [];
    #mascaraSumarizada = [];
    #mascaraBinariaSumarizada = [];
    #bits0 = 0;
    #bits1 = 0;
    #hostDisponibles = 0;
    #limiteInferior = [];
    #limiteSuperior = [];
    #broadcast = [];
    /**
     * @param {Array<string>} redes - El valor de redes debe ser un array de strings.
     * 
     */
    constructor(redes){
        if (redes.length < 2) throw new Error("Se necesitan al menos dos redes para sumarizarlas.");
        this.#redes = redes;
        this.#obtenerDatosRedes();
        this.#calcularNuevaRed();
        this.#calcularNuevaMascara();
        this.calcularBtis();
        this.#hostDisponibles = Math.pow(2, this.#bits0) - 2;
        this.#calcularLimites();
    }
    #calcularLimites(){
        this.#limiteInferior = sumarARed(1, this.#redSumarizada);
        this.#limiteSuperior = sumarARed(this.#hostDisponibles, this.#redSumarizada);
        this.#broadcast = sumarARed(this.#hostDisponibles + 1, this.#redSumarizada);
    }
    calcularBtis(){
        for (let simbolo of this.#mascaraBinariaSumarizada.join("")){
            if (simbolo === "0") this.#bits0++;
            if (simbolo === "1") this.#bits1++;
        }
    }
    #obtenerDatosRedes(){
        this.#datosRedes = this.#redes.map(red => new Red(red));
    }
    #calcularNuevaMascara(){
        const REDES_EN_BINARIO = this.#datosRedes.map(red => red.getRedEnBinario().join(""));
        const LONGITUD = REDES_EN_BINARIO[0].length;
        let nuevaMascaraEnBinario = "";
        for (let i = 0; i < LONGITUD; i++){
            let bitsColumna = REDES_EN_BINARIO.map(red => red[i]);
            if (this.#columnaSimboloIgual(bitsColumna)){
                nuevaMascaraEnBinario += "1";
            }
            else{
                nuevaMascaraEnBinario += "0".repeat(LONGITUD-i);
                break;
            }
        }
        this.#mascaraBinariaSumarizada = separarEnOctetos(nuevaMascaraEnBinario);
        this.#mascaraSumarizada = octetosBinariosADecimales(this.#mascaraBinariaSumarizada);
    }
    #columnaSimboloIgual(bitsColumna){
        if (bitsColumna.includes("1") && bitsColumna.includes("0")){
            return false;
        }
        return true;
    }
    #calcularNuevaRed(){
        const REDES_EN_BINARIO = this.#datosRedes.map(red => red.getRedEnBinario().join(""));
        const LONGITUD = REDES_EN_BINARIO[0].length;
        let nuevaRedEnBinario = "";
        for (let i = 0; i < LONGITUD; i++){
            let bitsColumna = REDES_EN_BINARIO.map(red => red[i]);
            nuevaRedEnBinario += this.#and(bitsColumna);
        }
        this.#redBinariaSumarizada = separarEnOctetos(nuevaRedEnBinario);
        this.#redSumarizada = octetosBinariosADecimales(this.#redBinariaSumarizada);
    }
    #and(bitsColumna){
        if (bitsColumna.includes("0")) return "0";
        return "1";
    }
    getAll(){
        return {
            redSumarizada: this.#redSumarizada,
            mascaraSumarizada: this.#mascaraSumarizada,
            bits0: this.#bits0,
            bits1: this.#bits1,
            hostDisponibles: this.#hostDisponibles,
            limiteInferior: this.#limiteInferior,
            limiteSuperior: this.#limiteSuperior,
            broadcast: this.#broadcast,
            redBinariaSumarizada: this.#redBinariaSumarizada,
            mascaraBinariaSumarizada: this.#mascaraBinariaSumarizada,
            redesIngresadas: this.#redes
        }
    }
    getRedSumarizada(){
        return this.#redSumarizada;
    }
    getMascaraSumarizada(){
        return this.#mascaraSumarizada;
    }
    getBits0(){
        return this.#bits0;
    }
    getBits1(){
        return this.#bits1;
    }
    getHostDisponibles(){
        return this.#hostDisponibles;
    }
    getLimiteInferior(){
        return this.#limiteInferior;
    }
    getLimiteSuperior(){
        return this.#limiteSuperior;
    }
    getBroadcast(){
        return this.#broadcast;
    }
    getRedBinariaSumarizada(){
        return this.#redBinariaSumarizada;
    }
    getMascaraBinariaSumarizada(){
        return this.#mascaraBinariaSumarizada;
    }
    getRedesIngresadas(){
        return this.#redes;
    }
}