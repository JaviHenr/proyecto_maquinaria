class HerramientaController {
    constructor() {}

    operarMenuHerramienta(opcion) {
        const ui = new UIPrincipal();
        
        switch (opcion) {
            case 1:
                ui.agregarHerramienta();
                break;
            case 3:
                ui.mostrarHerramienta();
                break;
            case 4:
                ui.buscarHerramientaId();
                break;
            case 5:
                ui.eliminarHerramienta();
                break;
        }
    }

    async agregarHerramienta(herramienta) {
        try {
            await Herramienta.create(herramienta);
        } catch (err) {
            console.error('Error agregando Herramienta:', err);
        }
    }


    async mostrarHerramienta() {
        try {
            const herramienta = await Herramienta.findAll();
            if (herramienta.length === 0) {
                console.log("No existen Herramienta registradas");
            } else {
                const ui = new UIPrincipal();
                ui.imprimirHerramienta(herramientas);
            }
        } catch (err) {
            console.error('Error mostrando Herramientas:', err);
        }
    }

    async mostrarHerramientaInterfaz() {
        try {
            const herramienta = await Herramienta.findAll();
            if (herramienta.length > 0) {
                const mm = new Menuherramienta();
                mm.imprimirHerramienta(Herramientas);
            } 
        } catch (err) {
            console.error('Error mostrando Herramientas:', err);
        }
    }

    async buscarHerramientaId(busqueda) {
        try {
            const herramientas = await Herramienta.findAll({ where: { idHerramienta: busqueda } });
            const ui = new UIPrincipal();
            ui.imprimirHerramienta(herramientas);
        } catch (err) {
            console.error('Error buscando herramientas:', err);
        }
    }

    async buscarHerramientaIdInterfaz(busqueda) {
        try {
            const herramientas = await Herramienta.findAll({ where: { idHerramienta: busqueda } });
            const mm = new MenuHerramienta();
            mm.imprimirHerramientaID(herramientas);
        } catch (err) {
            console.error('Error buscando herramienta:', err);
        }
    }

    async eliminarHerramienta(idHerramienta) {
        try {
            await Herramienta.destroy({ where: { idHerramienta } });
        } catch (err) {
            console.error('Error eliminando Herramienta:', err);
        }
    }

    async busquedaMarcaHerramienta(marca) {
        try {
            const herramienta = await Herramienta.findAll({ where: { marcaHerramienta: marca } });
            return herramienta;
        } catch (err) {
            console.error('Error buscando herramienta por marca:', err);
            return [];
        }
    }

    async cantidadHerramienta() {
        try {
            const herramienta = await Herramienta.findAll();
            return herramienta.length;
        } catch (err) {
            console.error('Error obteniendo cantidad de Herramientas:', err);
            return 0;
        }
    }
}

module.exports = herramienta.Controller.js;