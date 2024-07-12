import "./BarraLateral.css";
import iconoInicio from "../../assets/house-chimney-solid.svg";
import iconoDesglosarRed from "../../assets/magnifying-glass-chart-solid.svg";
import iconoSubnetearRed from "../../assets/diagram-project-solid.svg";
import iconoMultisubnetearRed from "../../assets/hive.svg";
import iconoSumaridarRed from "../../assets/arrows-to-circle-solid.svg";
import iconoInformacion from "../../assets/circle-question-solid.svg";

import { Link } from "react-router-dom";

function BarraLateral({paginaActual}){
    return (
        <nav id="barra_lateral">
            <Linea/>
            <Enlace url="/" texto="Inicio" paginaActual={paginaActual} icono={iconoInicio}/>
            <Linea/>
            <Enlace url="/desglosar-red" texto="Desglosar Red" paginaActual={paginaActual} icono={iconoDesglosarRed}/>
            <Enlace url="/subnetear-red" texto="Subnetear Red" paginaActual={paginaActual} icono={iconoSubnetearRed}/>
            <Enlace url="/multisubnetear-red" texto="Multisubnetear Red" paginaActual={paginaActual} icono={iconoMultisubnetearRed}/>
            {/* <Enlace url="/sumarizar-red" texto="Sumarizar Redes" paginaActual={paginaActual} icono={iconoSumaridarRed}/> */}
            <Linea/>
            <Enlace url="/informacion" texto="Información" paginaActual={paginaActual} icono={iconoInformacion}/>
        </nav>
    )
}
function Enlace({url, texto, paginaActual, icono}){
    return(
        // <a href={url} className={paginaActual === texto ? "active" : ""}> 
        <Link to={url} className={paginaActual === texto ? "active" : ""}>
            <img src={icono}/>
            <p>
                {texto}
            </p> 
        </Link>
    )
}
function Linea(){
    return(
        <p className="linea"></p>
    )
}
export default BarraLateral;