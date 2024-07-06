const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');

const Mantencion = db.define('Mantencion', {
    idMantencion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    tipoMantenimiento: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    repuestos: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    materiales: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    nivelCriticidad: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    causasPosibles: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    limpieza: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
}, {
    timestamps: false,
});

module.exports = Mantencion;