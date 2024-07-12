import './VentanaFlotante.css';
import advertencia from '../../assets/triangle-exclamation-solid.svg';

function VentanaFlotante ({aviso, id}) {

    return (
        <dialog id={id} className='dialog'>
            <div className='advertencia'>
                <img src={advertencia} alt='advertencia' />
                <p>{aviso}</p>                
            </div>
            <div className='contenedor_boton'>
                <button 
                onClick={(e) =>{
                    e.target.closest('dialog').close();
                }}>
                    Cerrar
                </button>                
            </div>

        </dialog>
    );
}

export default VentanaFlotante;