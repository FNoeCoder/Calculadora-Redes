import BarraLateral from '../BarraLateral/BarraLateral';
import VistaPrincipal from '../VistaPrincipal/VistaPrincipal';

function Informacion(){
    return (
        <>
            <BarraLateral paginaActual={"Información"}/>
            <VistaPrincipal paginaActual={"Información"}/> 
        </>
    )
}

export default Informacion;