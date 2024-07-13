import "./BotonDescargarTabla.css"

function BotonDescargarTabla({nombreArchivo}){
    function DescargarTabla(){
        // Obtener datos de la tabla
        var tabla = document.getElementById("miTabla");
        var filas = tabla.getElementsByTagName("tr");
        
        var contenido = "";
        
        // Obtener el contenido de la etiqueta <caption>
        var caption = tabla.getElementsByTagName("caption")[0];
        if (caption) {
            contenido += caption.innerText + "\n";
        }
        
        // Obtener los títulos de las columnas (desde la primera fila)
        var titulos = filas[0].getElementsByTagName("th");
        for (var k = 0; k < titulos.length; k++) {
            contenido += '"' + titulos[k].innerText + '",' // Agregar títulos al principio del contenido
        }
        contenido += "\n"; // Agregar salto de línea después de los títulos
        
        // Recorrer filas y columnas de la tabla
        for (var i = 1; i < filas.length; i++) {
            var celdas = filas[i].getElementsByTagName("td");
            
            for (var j = 0; j < celdas.length; j++) {
            contenido += '"' + celdas[j].innerText + '",'; // Agregar contenido separado por comas
            }
            
            contenido = contenido.slice(0, -1); // Eliminar la última coma en cada fila
            contenido += "\n"; // Agregar salto de línea al final de cada fila
        }
        
        // Crear el archivo CSV con codificación UTF-8
        var archivoExcel = new Blob(["\uFEFF" + contenido], { type: "text/csv;charset=utf-8" });
        var urlArchivo = URL.createObjectURL(archivoExcel);
        
        // Crear enlace de descarga
        var enlaceDescarga = document.createElement("a");
        enlaceDescarga.href = urlArchivo;
        enlaceDescarga.download = `${nombreArchivo}.csv`; // Cambié la extensión a .csv
        enlaceDescarga.style.display = "none"; // Ocultar el enlace
        
        // Agregar el enlace al documento y simular el clic
        document.body.appendChild(enlaceDescarga);
        enlaceDescarga.click();
        
        // Eliminar el enlace del documento
        document.body.removeChild(enlaceDescarga);
    }
    return (
        <button className="botonDescargar" onClick={DescargarTabla}>Descargar CSV</button>
    )
}

export default BotonDescargarTabla;