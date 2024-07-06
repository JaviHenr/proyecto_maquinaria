const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');

const Cliente = db.define('Cliente', {
    rutCliente: {
        type: DataTypes.STRING(12),
        primaryKey: true,
    },
    nombreCliente: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    direccionCliente: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    telefonoCliente: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    empresaCliente: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
}, {
    timestamps: false,
});

module.exports = Cliente;