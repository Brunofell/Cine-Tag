import Favoritos from "pages/Favoritos";
import Inicio from "./pages/Inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import Container from "components/Container";
import FavoritosProvider from "contextos/Favoritos";
import Player from "pages/Player";
import NaoEncontrado from "pages/NaoEncontrado"
import PaginaBase from "pages/PaginaBase";
function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<PaginaBase></PaginaBase>}> {/*rota aninhada */}
                    <Route index element={<Inicio />}></Route> {/*INDEX ELE ENTENDE QUE E A PÁGINA INICIAL*/}
                    <Route path="favoritos" element={<Favoritos />}></Route>
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="*" element={<NaoEncontrado></NaoEncontrado>  }></Route>
                </Route>
            </Routes>   
        </BrowserRouter>
    )
}

export default AppRoutes;


// O componente BrowserRouter é responsável por informar a nossa aplicação que 
// teremos um roteamento de componentes a seguir, 
// o Routes é o próprio roteador e o Route é a rota em específico.