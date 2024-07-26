import { useReservas } from "../context/ReservaMaquinariaProvider";
import { useNavigate } from "react-router-dom";
import "../App.css";

/* eslint-disable react/prop-types */
function ReservaMaquinariaCard({ reserva }) {
    const { deleteReserva } = useReservas();
    const navigate = useNavigate();
    const reservaArray = Array.isArray(reserva) ? reserva : [];

    return (
        <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th>Descripción Uso Maquinaria</th>
            <th>ID Activo M</th>
            <th>RUT Cliente</th>
            <th>Fecha Uso Maquinaria</th>
            <th>Hora Llegada Uso Maquinaria</th>
            <th>ID Reserva Maquinaria</th>
            <th>Hora Salida Uso Maquinaria</th>
          </tr>
        </thead>
        <tbody>
          {reservaArray.map((reserva, index) => (
            <tr key={index}>
              <td>{reserva.DESCRIPCION_USO_MAQUINARIA}</td>
              <td>{reserva.ID_ACTIVO_M}</td>
              <td>{reserva.RUT_CLIENTE}</td>
              <td>{reserva.FECHA_USO_MAQUINARIA}</td>
              <td>{reserva.HORA_LLEGADA_USO_MAQUINARIA}</td>
              <td className="text-sm font-bold">{reserva.ID_RESERVA_MAQUINARIA}</td>
              <td>{reserva.HORA_SALIDA_USO_MAQUINARIA}</td>
            </tr>
          ))}
        </tbody>
      </table>
        <div className="flex gap-x-1">
            <button
                className="bg-slate-300 px-2 py-1 text-red-800"
                onClick={() => deleteReserva(reserva.ID_RESERVA_MAQUINARIA)}
            >
                Eliminar
            </button>
            <button
                className="bg-slate-300 px-2 py-1 text-black"
                onClick={() => navigate(`/reserva/edit/${reserva.ID_RESERVA_MAQUINARIA}`)}
            >
                Editar
            </button>   
        </div>   
        </div>
    )
}

export default ReservaMaquinariaCard;