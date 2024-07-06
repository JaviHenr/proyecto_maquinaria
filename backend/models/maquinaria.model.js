const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');

const Maquinaria = db.define('Maquinaria', {
    idMaquinaria: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    marcaMaquinaria: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    modeloMaquinaria: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tamañoMaquinaria: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    timestamps: true,
});

module.exports = Maquinaria;