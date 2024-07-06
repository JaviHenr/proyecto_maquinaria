const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');

const ReservaHerramienta = db.define('ReservaHerramienta', {
    rutCliente: {
        type: DataTypes.STRING(12),
        primaryKey: true,
    },
    idActivoH: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    fechaUsoHerramienta: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    horaLlegadaHerramienta: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    horaSalidaHerramienta: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    descripcionUsoHerramienta: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
}, {
    timestamps: false,
});

module.exports = ReservaHerramienta;