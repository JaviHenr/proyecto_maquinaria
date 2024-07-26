const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');

const reservaMaquinaria = db.define('reservaMaquinaria', {
    idActivoM: {
        type: DataTypes.STRING(15),
        primaryKey: true,
    },
    rutCliente: {
        type: DataTypes.STRING(12),
        primaryKey: true,
    },
    fechaUsoMaquinaria: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    horaLlegadaUsoMaquinaria: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    descripcionUsoMaquinaria: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    horaSalidaUsoMaquinaria: {
        type: DataTypes.TIME,
        allowNull: false,
    },
}, {
    timestamps: false,
});

module.exports = reservaMaquinaria;