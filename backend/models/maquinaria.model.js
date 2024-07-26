const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');

const Maquinaria = db.define('Maquinaria', {
    idActivoM: {
        type: DataTypes.STRING(15),
        primaryKey: true,
    },
    numInventario: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    estatus: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    componentes: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    categoria: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    marca: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    modelo: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    numSerie: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    centroDeCosto: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    ubicacion: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
}, {
    timestamps: true,
});

module.exports = Maquinaria;