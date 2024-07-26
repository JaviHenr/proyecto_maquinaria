const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');

const PersonalLaboratorio = db.define('PersonalLaboratorio', {
    rutPersonalLaboratorio: {
        type: DataTypes.STRING(12),
        primaryKey: true,
    },
    nombrePersonalLaboratorio: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    cargoPersonalLaboratorio: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    areaPersonalLaboratorio: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    direccionPersonalLaboratorio: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    telefonoPersonalLaboratorio: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, 
{
    timestamps: false,
});

module.exports = PersonalLaboratorio;