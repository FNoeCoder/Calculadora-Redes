import "./Cantidades.css";

function Cantidades({cantidades, funcionEliminar}){
    return (
        <section id='cantidadHost'>
            {cantidades.map((cantidad, index) => {
                return (
                    <div key={index}> 
                        <p>{cantidad}</p>  
                        <button className="eliminarCantidad" onClick={()=>funcionEliminar(index)}>❌</button> 
                    </div>
                )
            })}
        </section>
    )
}

export default Cantidades;