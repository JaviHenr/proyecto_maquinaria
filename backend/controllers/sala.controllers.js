const Sala = require('../models/sala.model');
class SalaController {
    constructor() {}

    async agregarSala(sala) {
        try {
            await Sala.create(sala);
        } catch (err) {
            console.error('Error agregando Sala:', err);
        }
    }

    async mostrarSala() {
        try {
            const sala = await Sala.findAll();
            if (sala.length === 0) {
                console.log("No existen Salas registradas");
            } else {
                const ui = new UIPrincipal();
                ui.imprimirSala(salas);
            }
        } catch (err) {
            console.error('Error mostrando Salas:', err);
        }
    }

    async mostrarSalaInterfaz() {
        try {
            const sala = await Sala.findAll();
            if (sala.length > 0) {
                const mm = new Menusala();
                mm.imprimirSala(Salas);
            } 
        } catch (err) {
            console.error('Error mostrando Salas:', err);
        }
    }

    async buscarSalaId(busqueda) {
        try {
            const salas = await Sala.findAll({ where: { idSala: busqueda } });
            const ui = new UIPrincipal();
            ui.imprimirSala(salas);
        } catch (err) {
            console.error('Error buscando Salas:', err);
        }
    }

    async buscarSalaIdInterfaz(busqueda) {
        try {
            const salas = await Sala.findAll({ where: { idSala: busqueda } });
            const mm = new MenuSala();
            mm.imprimirSalaID(salas);
        } catch (err) {
            console.error('Error buscando Sala:', err);
        }
    }

    async eliminarSala(idSala) {
        try {
            await Sala.destroy({ where: { idSala } });
        } catch (err) {
            console.error('Error eliminando Sala:', err);
        }
    }

    async cantidadSala() {
        try {
            const sala = await Sala.findAll();
            return sala.length;
        } catch (err) {
            console.error('Error obteniendo cantidad de Sala:', err);
            return 0;
        }
    }
}

module.exports = sala.Controller.js;