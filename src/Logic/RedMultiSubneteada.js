import { RedSubneteada } from "./RedSubneteada.js";
import { sumarARed } from "./utils.js";



// Documentar
/**
 * Clase Red.
 * @class
 */

export class RedMultiSubneteada{
    #red = [];
    #listaHostRequeridos = [];
    #redesSubneteadasPorHost = [];
    /**
     * Crea una nueva instancia de Red. Por ejemplo, "192.168.0.0".
     * @param {string} red - El valor de red debe ser un string .
     * @param {Array<number>} listaHostRequeridos - El valor de listaHostRequeridos debe ser un array de numeros.
     */
    constructor({red, listaHostRequeridos}){
        if (listaHostRequeridos.length === 0) throw new Error("La lista de host requeridos no puede estar vacia");
        this.redIngresada = red;
        this.#red = red.split(".").map( octedo => parseInt(octedo));
        this.#listaHostRequeridos = listaHostRequeridos.sort((a, b) =>  b - a);
        this.#redesSubneteadasPorHost = this.#listaHostRequeridos.map(host => new RedSubneteada(red, {hostRequeridos: host}));
    }

    getTodasLasSubredes(){
        let hostParaSalto = this.#redesSubneteadasPorHost.map(red => red.getHostDisponibles());
        let mascaras = this.#redesSubneteadasPorHost.map(red => red.getMascara());

        let subred1 = {
            red: this.#red,
            broadcast: sumarARed(hostParaSalto[0]+1, this.#red),
            limineInferior: sumarARed(1, this.#red),
            limineSuperior: sumarARed(hostParaSalto[0], this.#red),
            hostDisponibles: hostParaSalto[0],
            mascara: mascaras[0],
            n:1
        };

        let subredes = [subred1];

        for (let i = 1; i < this.#redesSubneteadasPorHost.length; i++){
            let ultimaSubred = subredes[subredes.length - 1];

            let nuevaRed = sumarARed(1, ultimaSubred.broadcast);
            let nuevoBroadcast = sumarARed(hostParaSalto[i]+1, nuevaRed);
            let nuevoRango = {
                limineInferior: sumarARed(1, nuevaRed),
                limineSuperior: sumarARed(hostParaSalto[i], nuevaRed)
            }

            subredes.push({
                red: nuevaRed,
                broadcast: nuevoBroadcast,
                limineInferior: nuevoRango.limineInferior,
                limineSuperior: nuevoRango.limineSuperior,
                hostDisponibles: hostParaSalto[i],
                mascara: mascaras[i],
                n: i+1
            });
        }

        return subredes;
    }
    getJSON(){
        let datosRedSubneteada1 = this.#redesSubneteadasPorHost[0].getAll();
        

        let subredes = this.getTodasLasSubredes();
        let subredesFormateadas = subredes.map(subred => {
            return {
                red: subred.red.join("."),
                broadcast: subred.broadcast.join("."),
                limineInferior: subred.limineInferior.join("."),
                limineSuperior: subred.limineSuperior.join("."),
                hostDisponibles: subred.hostDisponibles,
                mascara: subred.mascara.join("."),
                n: subred.n
            }
        })
        let objetoParaJSON = {
            red: this.#red.join("."),
            tipoRed: datosRedSubneteada1.tipoRed,
            mascara: datosRedSubneteada1.mascara.join("."),
            redIngresada: this.redIngresada,
            mascaraEnBinario: datosRedSubneteada1.mascaraEnBinario.join("."),
            subredes: subredesFormateadas,
        }
            return objetoParaJSON;
    }
}