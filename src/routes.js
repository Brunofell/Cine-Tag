import Favoritos from "pages/Favoritos";
import Inicio from "./pages/Inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import Container from "components/Container";

function AppRoutes(){
    return (
        <BrowserRouter>
            <Cabecalho></Cabecalho>
                <Container>
                    <Routes>
                        <Route path="/" element={<Inicio />}></Route>
                        <Route path="/favoritos" element={<Favoritos />}></Route>
                    </Routes>
                </Container>
            <Rodape></Rodape>
        </BrowserRouter>
    )
}

export default AppRoutes;


// O componente BrowserRouter é responsável por informar a nossa aplicação que 
// teremos um roteamento de componentes a seguir, 
// o Routes é o próprio roteador e o Route é a rota em específico.