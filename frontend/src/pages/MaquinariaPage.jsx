import { useEffect} from "react"
import MaquinariaCard from "../components/MaquinariaCard"
import { useMaquinarias } from "../context/MaquinariaProvider"

function MaquinariaPage() {
  const { maquinarias, loadMaquinarias } = useMaquinarias()

  useEffect(() => {
    loadMaquinarias()
  }, []);

  function renderMain() {
    if(maquinarias.length === 0) return <p>No hay Maquinarias Registradas</p>
    return maquinarias.map(maquinaria => (
      <MaquinariaCard maquinaria={maquinaria} key={maquinaria.ID_ACTIVO_M} />
    ))
  }

  return (
    <div>
      <h1 className="text-5xl text-white fond-bold text-center">Maquinarias</h1>
      <div className="grid grid-cols-3 gap-2">
        {renderMain()}
      </div>
    </div>
  )
}

export default MaquinariaPage;