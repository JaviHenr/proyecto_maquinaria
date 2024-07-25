import { useReservas } from "../context/ReservaMaquinariaProvider";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function ReservaMaquinariaCard({ reserva }) {
    const { deleteReservas } = useReservas();
    const navigate = useNavigate();

    return (
        <div className="bg-zinc-700 text-white rounded-md p-4">
        <header className="flex justify-between">
            <h2 className="text-sm font-bold">{reserva.ID_RESERVA}</h2>
        </header>
            <p className="text-xs">{reserva.ID_USUARIO}</p>
            <p className="text-xs">{reserva.ID_MAQUINARIA}</p>
            <p className="text-xs">{reserva.FECHA_INICIO}</p>
            <p className="text-xs">{reserva.FECHA_FIN}</p>
            <p className="text-xs">{reserva.ESTADO}</p>
            <p className="text-xs">{reserva.OBSERVACIONES}</p>
        <div className="flex gap-x-1">
            <button
                className="bg-slate-300 px-2 py-1 text-black"
                onClick={() => deleteReservas(reserva.ID_RESERVA)}
            >
                Eliminar
            </button>
            <button
                className="bg-slate-300 px-2 py-1 text-black"
                onClick={() => navigate(`/edit/${reserva.ID_RESERVA}`)}
            >
                Editar
            </button>   
        </div>      
        </div>
    )
}