import { Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./pages/NotFound";
import MaquinariaPage from "./pages/MaquinariaPage";
import MaquinariaForm from "./pages/MaquinariaForm";
import ReservaMaquinariaPage from "./pages/ReservaMaquinariaPage";
import ReservaMaquinariaForm from "./pages/ReservaMaquinariaForm";

import { ReservaMaquinariaContextProvider } from "./context/ReservaMaquinariaProvider";
import { MaquinariaContextProvider } from "./context/MaquinariaProvider";



import Navbar from "./components/Navbar";

function App() {
  return ( 
      <div className="container mx-auto py-4 px-20">
      <link rel="stylesheet" href="style.css" />
      <div className="navbar-line">
        <div className="main-content">
        <Navbar />
          <Routes>
              
              <Route path="/maquinaria/" element={
                <MaquinariaContextProvider>
                 <MaquinariaPage />
                 </MaquinariaContextProvider> }
              />
                 
              <Route path="/maquinaria/new" element={ 
                <MaquinariaContextProvider>
                <MaquinariaForm />
                </MaquinariaContextProvider> } 
              />

              <Route path="/maquinaria/edit/:id" element={ 
                <MaquinariaContextProvider>
                <MaquinariaForm />
                </MaquinariaContextProvider> } 
              />

              <Route path="/" element={
                <ReservaMaquinariaContextProvider>
                 <ReservaMaquinariaPage />
                </ReservaMaquinariaContextProvider> }
              />

              <Route path="/reserva/new" element={ 
                <ReservaMaquinariaContextProvider>
                  <ReservaMaquinariaForm />
                </ReservaMaquinariaContextProvider> } 
              />
              
              <Route path="/reserva/edit/:id" element={ 
                <ReservaMaquinariaContextProvider>
                  <ReservaMaquinariaForm />
                </ReservaMaquinariaContextProvider> } 
              />

              <Route path="*" element={ <NotFound/> } />
              
          </Routes>
          </div>
          </div>
      </div>
  );
}
export default App;
