import { Routes, Route } from 'react-router-dom';
import MaquinariaPage from "./pages/MaquinariaPage";
import MaquinariaForm from "./pages/MaquinariaForm";
import NotFound from "./pages/NotFound";

import { MaquinariaContextProvider } from "./context/MaquinariaProvider";

const rutaMaquinaria = () => {
    return(
    <MaquinariaContextProvider>
          <Routes>
              <Route path="/" element={ <MaquinariaPage /> } />
              <Route path="/new" element={ <MaquinariaForm /> } />
              <Route path="/edit/:id" element={ <MaquinariaForm /> } />
              <Route path="*" element={ <NotFound/> } />
          </Routes>
        </MaquinariaContextProvider>
    )
}

export default rutaMaquinaria;