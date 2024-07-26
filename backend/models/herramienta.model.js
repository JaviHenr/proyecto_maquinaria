const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');

const Herramienta = db.define('Herramienta', {
    idActivoH: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    numInventario: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    estatus: { 
        type: DataTypes.STRING,
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    componentes: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false,  
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    modelo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    numSerie: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    centroDeCosto: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ubicacion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
});

module.exports = Herramienta;