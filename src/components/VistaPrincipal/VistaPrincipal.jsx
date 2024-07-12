import "./VistaPrincipal.css";

function VistaPrincipal({ children, paginaActual}){
    return (
        <main id="vista_principal">
            <section id="barra_superior">
                <h1>{paginaActual}</h1>
            </section>
            <section id="contenido">
                {children}
            </section>
        </main>
    );
}



export default VistaPrincipal;