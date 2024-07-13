import { useState } from 'react';
import BarraLateral from '../BarraLateral/BarraLateral';
import VistaPrincipal from '../VistaPrincipal/VistaPrincipal';
import Tabla from '../Tabla/Tabla'
import VentanaFlotante from "../dialog/VentanaFlotante";
import { Red } from "../../Logic/Red";
import "../general.css";
import BotonDescargarTabla from '../BotonDescargarTabla/BotonDescargarTabla.jsx';

function DesglosarRed(){
    const [red, setRed] = useState("")
    const [error, setError] = useState("")
    const [data, setData] = useState({})

    function changeRed(e){
        setRed(e.target.value)
    }
    function onClickDesglosar(){
        try{
            let resul = new Red(red);
            setData(resul.getAll())
        }
        catch(e){
            setError( e.message)
            setData({})
            document.getElementById('aviso').showModal();
        }
    }

    return(
        <>
            <BarraLateral paginaActual={"Desglosar Red"}/>
            <VistaPrincipal paginaActual={"Desglosar Red"}>
                <p>En esta sección se desglosará una red para conocer sus datos</p>
                <label htmlFor="ip">Ingresa una Red: </label>
                <input onChange={changeRed} className='general' type="text" id="red" name="red" value={red} placeholder='192.168.1.0' autoComplete='off'/>
                <button onClick={onClickDesglosar} type='button'>Desglosar</button>

                {data?.red ? <TablaVertical datos={data}/> : null}
                <VentanaFlotante aviso={error} id="aviso"/> 
            </VistaPrincipal>
        </>
    )
}

function TablaVertical({datos}){
    console.log(datos);
    return(
        <div className="tabla">
        <table id='miTabla'>
            <thead>
            <tr>
                <th>Clase</th>
                <th>Red</th>
                <th>Red binaria</th>
                <th>Rango minimo</th>
                <th>Rango maximo</th>
                <th>Broadcast</th>
                <th>Mascara</th>
                <th>Mascara Binaria</th>
                <th>Hosts</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{datos.tipoRed}</td>
                <td>{datos.red.join(".")}</td>
                <td>{datos.redEnBinario.join(".")}</td>
                {/* <td>{`${datos.rango.limineInferior.join(".")} - ${datos.rango.limineSuperior.join(".")}`}</td> */}
                <td>{datos.rango.limineInferior.join(".")}</td>
                <td>{datos.rango.limineSuperior.join(".")}</td>
                <td>{datos.broadcast.join(".")}</td>
                <td>{datos.mascara.join(".")}</td>
                <td>{datos.mascaraEnBinario.join(".")}</td>
                <td>{datos.hostDisponibles}</td>
            </tr>
            </tbody>
        </table>
        {/* <BotonDescargarTabla nombreArchivo={`${datos.red.join(".")}_desglozada`} /> */}
        </div>
    )
}

export default DesglosarRed;