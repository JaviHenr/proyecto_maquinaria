const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');

const ReservaSala = db.define('ReservaSala', {
    numeroSala: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    rutCliente: {
        type: DataTypes.STRING(12),
        primaryKey: true,
    },
    fechaUsoSala: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    horaLlegadaUsoSala: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    descripcionUsoSala: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    horaSalidaUsoSala: {
        type: DataTypes.TIME,
        allowNull: false,
    },
}, {
    timestamps: false,
});

module.exports = ReservaSala;