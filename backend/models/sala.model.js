const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');

const Sala = db.define('Sala', {
    idSala: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    marcaSala: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    modeloSala: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tamañoSala: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    timestamps: true,
});

module.exports = Sala;