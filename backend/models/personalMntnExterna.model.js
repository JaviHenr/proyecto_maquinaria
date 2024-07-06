const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');

const PersonalMntnExterna = db.define('PersonalMntnExterna', {
    idEmpresaExterna: {
        type: DataTypes.STRING(12),
        primaryKey: true,
    },
    nombrePersonalMantencion: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    nombreEmpresaMantencion: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    cargoPersonalMantencion: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    direccionEmpresaMantencion: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    telefonoEmpresaMantencion: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: false,
});

module.exports = PersonalMntnExterna;