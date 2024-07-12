import BarraLateral from '../BarraLateral/BarraLateral';
import VistaPrincipal from '../VistaPrincipal/VistaPrincipal';
import { useState } from 'react';
import VentanaFlotante from "../dialog/VentanaFlotante";
import { RedMultiSubneteada } from "../../Logic/RedMultiSubneteada";
import Tabla from '../Tabla/Tabla'
import Cantidades from '../Cantidades/Cantidades';
import "../general.css";
import BotonDescargarTabla from '../BotonDescargarTabla/BotonDescargarTabla';





function MultiSubnetearRed() {
    const [cantidades, setCantidades] = useState([]);
    const [error, setError] = useState("");
    const [filas, setFilas] = useState([]);
    function EliminarCantidad(posicion){
        let nuevaLista = cantidades.filter((elemento, index) => index !== posicion);
        setCantidades(nuevaLista);
        setFilas([]);
    }
    function AgregarCantidad(){
        let cantidad = parseInt(document.getElementById('cantidad').value);
        if(Number.isInteger(cantidad) && cantidad > 0){
            setCantidades([...cantidades, cantidad]);
            document.getElementById('cantidad').value = "";
            setFilas([]);
            //cuadno se agrega una cantida poner selecionado el input
            document.getElementById('cantidad').focus();
        }
        else{
            setError("La cantidad debe ser un número entero mayor a 0");
            document.getElementById('aviso').showModal();
        }
    }
    function CalcularSubneteo(){
        try{
            let redSubneteo = document.getElementById('red').value;
            let redSubneteada = new RedMultiSubneteada({red: redSubneteo, listaHostRequeridos: cantidades});
            let subredes = redSubneteada.getTodasLasSubredes();
            setFilas(subredes);
        }
        catch(e){
            setError(e.message);
            document.getElementById('aviso').showModal();
        }
    }
    return (
        <>
            <BarraLateral paginaActual={"Multisubnetear Red"}/>
            <VistaPrincipal paginaActual={"Multisubnetear Red"}>

                <p>En esta sección se subneteará para varias para conocer sus datos</p>
                <div className='general'>
                    <label htmlFor="">Multisubnetear la red </label>
                    <input className='general' type="text" id="red" name="red" placeholder="192.168.0.0" autoComplete='off'/>
                    {cantidades.length > 0 ? <label htmlFor="">Para los host: </label> : <label htmlFor="">Coloca la cantida de host: </label>}
                    {cantidades.length > 0 ? <Cantidades cantidades={cantidades} funcionEliminar={EliminarCantidad}/> : null}
                    <input className='general' type="number" id="cantidad" name="cantidad" placeholder="123" autoComplete='off'/>
                    {cantidades.length > 1 ? 
                        <button className='general' type="button" onClick={()=>{setCantidades([]); setFilas([]);}
                        }>Eliminar Todos</button>
                    : null}
                    <button className='general' type="button" onClick={AgregarCantidad}>Agregar</button>                    
                </div>


                <button onClick={CalcularSubneteo}>Subnetear</button>
                {filas.length > 0 ? <Tabla datos={filas}/> : null}
                <VentanaFlotante aviso={error} id="aviso"/>
            </VistaPrincipal>
        </>
  );
}

export default MultiSubnetearRed;