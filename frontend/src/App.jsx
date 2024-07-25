import { Route, Routes } from "react-router-dom";
import MaquinariaPage from "./pages/MaquinariaPage";
import MaquinariaForm from "./pages/MaquinariaForm";
import NotFound from "./pages/NotFound";
import { MaquinariaContextProvider } from "./context/MaquinariaProvider";

import Navbar from "./components/Navbar";

function App() {
  return ( 
    <div className="bg-zinc-500 h-screen"> 
      <div className="container mx-auto py-4 px-20">
        <Navbar />
        <MaquinariaContextProvider>
          <Routes>
              <Route path="/" element={ <MaquinariaPage /> } />
              <Route path="/new" element={ <MaquinariaForm /> } />
              <Route path="/edit/:id" element={ <MaquinariaForm /> } />
              <Route path="*" element={ <NotFound/> } />
          </Routes>
        </MaquinariaContextProvider>
      </div>
    </div>
  );
}
export default App;