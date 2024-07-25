import { createContext, useContext, useState } from "react";
import { 
    getReservaMaquinariaRequest,
    getReservaMaquinariasRequest,
    createReservaMaquinariaRequest,
    deleteReservaMaquinariaRequest,
    updateReservaMaquinariaRequest
} from "../api/reservaMaquinaria.api";
import { ReservaMaquinariaContext } from "./ReservaMaquinariaContext";

export const useReservas = () => {
    const context = useContext(ReservaMaquinariaContext);
    if (context === undefined) {
        throw new Error("use Reservas must be used within a ReservaContextProvider");
    }
    return context;
}

export const ReservaMaquinariaContextProvider = ({ children }) => {

    const [reservas, setReserva] = useState([])

    async function loadReservas() {
        const response = await getReservaMaquinariasRequest();
        setReserva(response.data);
    }

    const deleteReservas = async (id) => {
        try{
            await deleteReservaMaquinariaRequest(id);
            setReserva(reservas.filter(reserva => reserva.id !== id));
        } catch (error) {
            console.error(error)
        }
    }

    const createReservas = async (reserva) => {
        try {
            await createReservaMaquinariaRequest(reserva);
        } catch (error) {
            console.error(error);
        }
    }

    const getReserva = async (id) => {
        try {
            const response = await getReservaMaquinariaRequest(id);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    const updateReserva = async (id, newFields) => {
        try {
            const response = await updateReservaMaquinariaRequest(id, newFields);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ReservaMaquinariaContext.Provider 
            value={{ 
                reservas,
                loadReservas,
                deleteReservas,
                createReservas,
                getReserva,
                updateReserva
            }}
        >
            {children}
        </ReservaMaquinariaContext.Provider>
    );
};

