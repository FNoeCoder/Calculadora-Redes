import BarraLateral from '../BarraLateral/BarraLateral';
import VistaPrincipal from '../VistaPrincipal/VistaPrincipal';

function Inicio() {
    return (
        <>
            <BarraLateral paginaActual={"Inicio"}/>
            <VistaPrincipal paginaActual={"Inicio"}/>
        </>
    );    
}

export default Inicio;