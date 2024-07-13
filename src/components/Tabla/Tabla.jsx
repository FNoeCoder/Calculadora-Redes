import Fila from "./Fila";
import BotonDescargarTabla from '../BotonDescargarTabla/BotonDescargarTabla';
import BotonDescargarJSON from '../BotonDescargarTabla/BotonDescargarJSON';


function Tabla({datos, datosCompletos}) {
    return (
        <div className="tabla">
            <table id="miTabla">
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>Red</th>
                        <th>Rango minimo</th>
                        <th>Rango maximo</th>
                        <th>Broadcast</th>
                        <th>Host Disponibles</th>
                        <th>Mascara</th>
                    </tr>                            
                </thead>
                <tbody>
                    {datos.map((datosFila) => <Fila datosFila={datosFila} key={datosFila.n}/>)}
                </tbody>
            </table>
            <div className="BotonesDescargar">
                <BotonDescargarTabla nombreArchivo={`${datos[0].red.join(".")}_subteneada`}/>
                <BotonDescargarJSON nombreArchivo={`${datos[0].red.join(".")}_subteneada`} datosCompletos={datosCompletos}/>            
            </div>

        </div>
    )

}

export default Tabla;