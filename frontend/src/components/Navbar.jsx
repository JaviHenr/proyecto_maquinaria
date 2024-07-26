import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="wrapper">
        
        {/* Pestañas de navegacion de la sidebar*/}
        <div className="sidenav">
        <img src="/images/logoubb.png" alt="Logo" className="sidenavlogo" />
        <h1>CITEC<span style={{ color: '#ecec00' }}>UBB</span></h1>
        <h3>PEPLAB</h3>
        

        <ul>
            <li><Link to="/"><i className="fa-solid fa-house"></i> Home</Link></li>
            <li><Link to="/reserva/"><i className="fa-solid fa-pen-nib"></i> RESERVAS</Link></li>
            <li><Link to="/maquinaria/new"><i className="fa-solid fa-plus"></i> AGREGAR MAQUINARIA</Link></li>
            <li><a href="#"><i className="fa-solid fa-minus"></i> QUITAR MAQUINARIA</a></li>
            <li><a href="#"><i className="fa-solid fa-envelope"></i> CONTACTO</a></li>
        </ul>
        </div>
    </div>
  );
}

export default Navbar;