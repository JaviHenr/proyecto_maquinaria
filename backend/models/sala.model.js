const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');

const Sala = db.define('Sala', {
    numeroSala: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    descripcionSala: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    tipoSala: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    equipamiento: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
}, {
    timestamps: true,
});

module.exports = Sala;