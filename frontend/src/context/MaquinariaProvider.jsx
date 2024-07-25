import {  createContext, useContext, useState } from "react";
import { 
    getMaquinariaRequest,
    getMaquinariasRequest,
    createMaquinariaRequest,
    deleteMaquinariaRequest,
    updateMaquinariaRequest
} from "../api/reservaMaquinaria.api";
import { MaquinariaContext } from "./MaquinariaContext";

export const useMaquinarias = () => {
  const context = useContext(MaquinariaContext);
  if (context === undefined) {
    throw new Error("use Maquinarias must be used within a MaquinariaContextProvider");
  }
  return context;
};

export const MaquinariaContextProvider = ({ children }) => {

    const [maquinarias, setMaquinarias] = useState([])

    async function loadMaquinarias() {
        const response = await getMaquinariasRequest();
        setMaquinarias(response.data);
    }

    const deleteMaquinaria = async (id) => {
        try{
            await deleteMaquinariaRequest(id);
            setMaquinarias(maquinarias.filter(maquinaria => maquinaria.id !== id));
        } catch (error) {
            console.error(error)
        }
    }   

    const createMaquinaria = async (maquinaria) => {
        try {
            await createMaquinariaRequest(maquinaria);
        } catch (error) {
            console.error(error);
        }
    }

    const getMaquinaria = async (id) => {
        try {
            const response = await getMaquinariaRequest(id);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    } 

    const updateMaquinaria = async (id, newFields) => {
        try {
            const response = await updateMaquinariaRequest(id, newFields);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <MaquinariaContext.Provider 
            value={{ 
                maquinarias,
                loadMaquinarias,
                deleteMaquinaria,
                createMaquinaria,
                getMaquinaria,
                updateMaquinaria
            }}
        >
            {children}
        </MaquinariaContext.Provider>
    );
};

