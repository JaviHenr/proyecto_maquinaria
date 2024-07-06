const HerramientaController = require('./herramienta.controller');
const Herramienta = require('../models/herramienta.model');

// crud para reservas de herramientas:

class RsrvHerramientaController {
    async agregarRsrvHerramienta(rsrvHerramienta) {
        try {
            await Herramienta.create(rsrvHerramienta);
        } catch (err) {
            console.error('Error agregando Reserva de Herramienta:', err);
        }
    }
    async mostrarRsrvHerramienta() {
        try {
            const rsrvHerramienta = await Herramienta.findAll();
            if (rsrvHerramienta.length === 0) {
                console.log("No existen Reservas de Herramienta registradas");
            } else {
                const ui = new UIPrincipal();
                ui.imprimirRsrvHerramienta(rsrvHerramienta);
            }
        } catch (err) {
            console.error('Error mostrando Reservas de Herramienta:', err);
        }
    }

    // buscar herramienta por numero de serie:
    async buscarRsrvHerramienta(busqueda) {
        try {
            const rsrvHerramienta = await Herramienta.findAll({ where: { numeroSerie: busqueda } });
            const ui = new UIPrincipal();
            ui.imprimirRsrvHerramienta(rsrvHerramienta);
        } catch (err) {
            console.error('Error buscando Reserva de Herramienta:', err);
        }
    }

    async buscarRsrvHerramientaId(busqueda) {
        try {
            const rsrvHerramienta = await Herramienta.findAll({ where: { idHerramienta: busqueda } });
            const ui = new UIPrincipal();
            ui.imprimirRsrvHerramienta(rsrvHerramienta);
        } catch (err) {
            console.error('Error buscando Reserva de Herramienta:', err);
        }
    }

    async eliminarRsrvHerramienta(idHerramienta) {
        try {
            await Herramienta.destroy({ where: { idHerramienta } });
        } catch (err) {
            console.error('Error eliminando Reserva de Herramienta:', err);
        }
    }  
}

module.exports = new RsrvHerramientaController();
