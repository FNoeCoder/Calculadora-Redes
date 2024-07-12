import Fila from "./Fila";
import BotonDescargarTabla from '../BotonDescargarTabla/BotonDescargarTabla';

function Tabla({datos}){
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
            <BotonDescargarTabla nombreArchivo={`${datos[0].red.join(".")}_subteneada`}/>
        </div>
    )

}

export default Tabla;