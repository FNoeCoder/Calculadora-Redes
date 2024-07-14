import BarraLateral from '../BarraLateral/BarraLateral';
import VistaPrincipal from '../VistaPrincipal/VistaPrincipal';
import "./textoGeneral.css";

function Informacion() {
    return (
        <>
            <BarraLateral paginaActual={"Información"}/>
            <VistaPrincipal paginaActual={"Información"}>
                <div className="contenido">
                    <h1>Información del Proyecto</h1>
                    <p>
                        Este proyecto, Calculadora de Redes, ha sido desarrollado como parte de mis estudios en Ingeniería de Software.
                        Aquí puedes encontrar más información sobre el proyecto y sobre mí.
                    </p>
                    <h2>Enlaces Útiles</h2>
                    <ul>
                        <li>
                            <a href="https://github.com/FNoeCoder" target="_blank" rel="noopener noreferrer">
                                Mi GitHub
                            </a>
                        </li>
                        <li>
                            <a href="www.linkedin.com/in/FcoNoeAH" target="_blank" rel="noopener noreferrer">
                                Mi LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/FNoeCoder/Calculadora-Redes" target="_blank" rel="noopener noreferrer">
                                Repositorio del Proyecto
                            </a>
                        </li>
                    </ul>
                    <h2>Contacto</h2>
                    <p>
                        Si tienes alguna pregunta o sugerencia sobre el proyecto, no dudes en ponerte en contacto conmigo a través de mis redes sociales.
                    </p>
                </div>
            </VistaPrincipal>
        </>
    );
}

export default Informacion;
