import BarraLateral from '../BarraLateral/BarraLateral';
import VistaPrincipal from '../VistaPrincipal/VistaPrincipal';

function Información(){
    return (
        <>
            <BarraLateral paginaActual={"Información"}/>
            <VistaPrincipal paginaActual={"Información"}/> 
        </>
    )
}

export default Información;