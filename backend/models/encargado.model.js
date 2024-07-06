const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');

const Encargado = db.define('Encargado', {
    rutEncargado: {
        type: DataTypes.STRING(50),
        primaryKey: true,
    },
    nombreEncargado: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    areaEncargado: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    direccionEncargado: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    telefonoEncargado: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    numeroSala: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idActivoH: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idActivoM: {
        type: DataTypes.STRING(15),
        allowNull: false,
    },
    idMantencion: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: false,
}); 

module.exports = Encargado;