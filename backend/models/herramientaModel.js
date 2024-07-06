const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');

const Herramienta = db.define('Herramienta', {
    idHerramienta: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    marcaHerramienta: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    modeloHerramienta: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tamañoHerramienta: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    timestamps: true,
});

module.exports = Herramienta;