import "./BotonDescargarTabla.css";

function BotonDescargarJSON({ nombreArchivo, datosCompletos }) {
    function DescargarJSON() {

        var contenido = JSON.stringify(datosCompletos, null, 4);

        var archivoJSON = new Blob([contenido], { type: "application/json" });
        var urlArchivo = URL.createObjectURL(archivoJSON);

        var enlaceDescarga = document.createElement("a");
        enlaceDescarga.href = urlArchivo;
        enlaceDescarga.download = `${nombreArchivo}.json`;
        enlaceDescarga.style.display = "none";

        document.body.appendChild(enlaceDescarga);
        enlaceDescarga.click();

        document.body.removeChild(enlaceDescarga);
    }

    return (
        <button className="botonDescargar" onClick={DescargarJSON}>Descargar JSON</button>
    );
}

export default BotonDescargarJSON;
