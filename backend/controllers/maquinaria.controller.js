const Maquinaria = require('../models/maquinaria.model');

class MaquinariaController {
    async agregarMaquinaria(maquinaria) {
        try {
            await Maquinaria.create(maquinaria);
        } catch (err) {
            console.error('Error agregando Maquinaria:', err);
        }
    }

    async mostrarMaquinaria() {
        try {
            const maquinaria = await Maquinaria.findAll();
            if (maquinaria.length > 0) {
                const mm = new MenuMaquinaria();
                mm.imprimirMaquinaria(maquinaria);
            }
        } catch (err) {
            console.error('Error mostrando Maquinaria:', err);
        }
    }
    
    async buscarMaquinariaId(busqueda) {
        try {
            const maquinaria = await Maquinaria.findAll({ where: { idMaquinaria: busqueda } });
            const ui = new UIPrincipal();
            ui.imprimirMaquinaria(maquinaria);
        } catch (err) {
            console.error('Error buscando maquinaria:', err);
        }
    }

    async eliminarMaquinaria(idMaquinaria) {
        try {
            await Maquinaria.destroy({ where: { idMaquinaria } });
        } catch (err) {
            console.error('Error eliminando Maquinaria:', err);
        }
    }

    async modificarMaquinaria(idMaquinaria, maquinaria) {
        try {
            await Maquinaria.update(maquinaria, { where: { idMaquinaria } });
        } catch (err) {
            console.error('Error modificando Maquinaria:', err);
        }
    }

    async cantidadMaquinaria() {
        try {
            const maquinaria = await Maquinaria.findAll();
            console.log(`Existen ${maquinaria.length} maquinaria registradas`);
        } catch (err) {
            console.error('Error contando maquinaria:', err);
        }
    }

}

module.exports = MaquinariaController;