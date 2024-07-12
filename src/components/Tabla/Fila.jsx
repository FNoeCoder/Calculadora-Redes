function Fila({datosFila}){
    function formatearCantidad(cantidad){
        let cantidadString = cantidad.toString();
        let cadenaNumero = "";
 
        for (let pocision = cantidadString.length - 1; pocision >= 0; pocision--){
            cadenaNumero = cantidadString[pocision] + cadenaNumero;
            if (cadenaNumero.length % 3 === 0 && pocision !== 0){
                cadenaNumero = "," + cadenaNumero;
            }
        }
        return cadenaNumero;
    }
 
    let n = datosFila.n;
    let red = datosFila.red.join(".");
    let rangoMinimo = datosFila.limineInferior.join(".");
    let rangoMaximo = datosFila.limineSuperior.join(".");
    let broadcast = datosFila.broadcast.join(".");
    let hostDisponibles = formatearCantidad(datosFila.hostDisponibles);
    let mascara = datosFila.mascara.join(".");

    return (
        <tr>
            <td>{n}</td>
            <td>{red}</td>
            <td>{rangoMinimo}</td>
            <td>{rangoMaximo}</td>
            <td>{broadcast}</td>
            <td>{hostDisponibles}</td>
            <td>{mascara}</td>
        </tr>
    );
}


export default Fila;