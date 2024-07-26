import { useMaquinarias } from "../context/MaquinariaProvider";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function MaquinariaCard({ maquinaria }) {
    const { deleteMaquinaria } = useMaquinarias();
    const navigate = useNavigate();

    return (
        <div className="bg-zinc-700 text-white rounded-md p-4">
        <header className="flex justify-between">
            <h2 className="text-sm font-bold">{maquinaria.NOMBRE}</h2>
        </header>
            <p className="text-xs">{maquinaria.NUM_INVENTARIO}</p>
            <p className="text-xs">{maquinaria.COMPONENTES}</p>
            <p className="text-xs">{maquinaria.CATEGORIA}</p>
            <p className="text-xs">{maquinaria.MARCA}</p>
            <p className="text-xs">{maquinaria.MODELO}</p>
            <p className="text-xs">{maquinaria.NUM_SERIE}</p>
            <p className="text-xs">{maquinaria.CENTRO_DE_COSTO}</p>
            <p className="text-xs">{maquinaria.UBICACION}</p>
        <span>{maquinaria.ID_ACTIVO_M}</span>
        <div className="flex gap-x-1">
            <button
                className="bg-slate-300 px-2 py-1 text-black"
                onClick={() => deleteMaquinaria(maquinaria.ID_ACTIVO_M)}
            >
                Eliminar
            </button>
            <button
                className="bg-slate-300 px-2 py-1 text-black"
                onClick={() => navigate(`maquinaria/edit/${maquinaria.ID_ACTIVO_M}`)}
            >
                Editar
            </button>   
        </div>      
        </div>
    )
}

export default MaquinariaCard;
