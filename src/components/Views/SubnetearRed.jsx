import BarraLateral from '../BarraLateral/BarraLateral';
import VistaPrincipal from '../VistaPrincipal/VistaPrincipal';
import Tabla from '../Tabla/Tabla'
import { useState } from 'react';
import VentanaFlotante from "../dialog/VentanaFlotante";
import { RedSubneteada } from "../../Logic/RedSubneteada";
import "../general.css";

function SubnetearRed(){
    const [red, setRed] = useState("")
    const [cantidad, setCantidad] = useState(0)
    const [tipo, setTipo] = useState("1")
    const [error, setError] = useState("")
    const [filas, setFilas] = useState([])

    function onClickSubnetear(){
        try{
            let objetoSubred = tipo === "1" ? {hostRequeridos: cantidad} : {subredesRequeridas: cantidad};
            let resul = new RedSubneteada(red, objetoSubred);
            console.log(resul.getAll());
            setFilas(resul.getTodasLasSubredes())
            // console.log(resul.getTodasLasSubredes())
        }
        catch(e){
            setError( e.message)
            setFilas([])
            document.getElementById('aviso').showModal();
        }
    }

    return (
        <>
            <BarraLateral paginaActual={"Subnetear Red"}/>
            <VistaPrincipal paginaActual={"Subnetear Red"}>
                <p>En esta sección se subneteará una red para conocer sus datos</p>
                <div className='general'>
                    <label htmlFor="">Subnetear la red </label>
                    <input className='general' type="text" id="red" name="red" placeholder="192.168.0.0" value={red} onChange={(e)=> setRed(e.target.value)} autoComplete='off'/>
                    <label htmlFor="">para</label>
                    <input className='general' type="number" id="cantidad" name="cantidad" placeholder="4" value={cantidad} onChange={(e)=> setCantidad(parseInt(e.target.value))} autoComplete='off'/>
                    <select className='general' value={tipo} name="tipo" id="tipo" onChange={(e) => setTipo(e.target.value)}>
                        <option value="1">Hosts</option>
                        <option value="2">Subredes</option>
                    </select>
                </div>

                <button type="button" onClick={onClickSubnetear}>Subnetear</button>
                {filas.length > 0 ? <Tabla datos={filas}/> : null}
                <VentanaFlotante aviso={error} id="aviso"/> 
            </VistaPrincipal> 
        </>
    )
}

export default SubnetearRed;