import BarraLateral from '../BarraLateral/BarraLateral';
import VistaPrincipal from '../VistaPrincipal/VistaPrincipal';
import "./textoGeneral.css";

function Inicio() {
    return (
        <>
            <BarraLateral paginaActual={"Inicio"}/>
            <VistaPrincipal paginaActual={"Inicio"}>
                <div className="contenido">
                    <h1>Bienvenido a la Calculadora de Redes</h1>
                    <p>
                        Esta herramienta te permite realizar diversas operaciones con redes y subredes, incluyendo subnetear redes,
                        multisubnetear redes y desglosar redes para obtener información detallada.
                    </p>
                    <h2>Funciones Principales</h2>
                    <ul>
                        <li><strong>Subnetear Red:</strong> Divide una red en subredes basadas en la cantidad de hosts o subredes requeridas.</li>
                        <li><strong>Multisubnetear Red:</strong> Divide una red en múltiples subredes especificando diferentes cantidades de hosts.</li>
                        <li><strong>Desglosar Red:</strong> Proporciona información detallada sobre una red específica, incluyendo clase, rango de direcciones, y más.</li>
                    </ul>
                    <p>
                        Utiliza el menú de navegación en la barra lateral para acceder a estas funcionalidades y comenzar a trabajar con tus redes.
                    </p>
                </div>
            </VistaPrincipal>
        </>
    );    
}

export default Inicio;
