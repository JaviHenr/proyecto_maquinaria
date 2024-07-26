import { useEffect } from "react";
import ReservaMaquinariaCard from "../components/ReservaMaquinariaCard";
import { useReservas } from "../context/ReservaMaquinariaProvider";

function ReservaMaquinariaPage() {
    const { reservas, loadReservas } = useReservas();
    
    useEffect(() => {
        loadReservas();
    }, []);
    
    function renderMain() {
        if (reservas.length === 0) return <p>No hay Reservas Registradas</p>;
        return reservas.map((reserva) => (
        <ReservaMaquinariaCard reserva={reserva} key={reserva.ID_RESERVA_MAQUINARIA} />
        ));
    }
    
    return (
        <div>
        <h1 className="text-5xl text-white fond-bold text-center">Reservas</h1>
        <div className="grid grid-cols-3 gap-2">
            {renderMain()}
        </div>
        </div>
    );
}

export default ReservaMaquinariaPage;