import Inicio from "./pages/Inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;


// O componente BrowserRouter é responsável por informar a nossa aplicação que 
// teremos um roteamento de componentes a seguir, 
// o Routes é o próprio roteador e o Route é a rota em específico.