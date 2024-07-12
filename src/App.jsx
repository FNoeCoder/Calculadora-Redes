import Inicio from './components/Views/Inicio';
import DesglosarRed from './components/Views/DesglosarRed';
import SubnetearRed from './components/Views/SubnetearRed';
import MultisubnetearRed from './components/Views/MultiSubnetearRed';
import SumarizarRed from './components/Views/SumarizarRed';
import Información from './components/Views/Informacion';
import { Routes, Route } from 'react-router-dom';

function App(){
    return(
        <>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/desglosar-red" element={<DesglosarRed/>} />
                <Route path="/subnetear-red" element={<SubnetearRed/>} />
                <Route path="/multisubnetear-red" element={<MultisubnetearRed/>} />
                {/* <Route path="/sumarizar-red" element={<SumarizarRed/>} /> */}
                <Route path="/informacion" element={<Información/>} />
                <Route path="*" element={<h1>404</h1>} />
            </Routes>
        </>
    )
}

export default App;