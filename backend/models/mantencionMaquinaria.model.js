const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');

const MantencionMaquinaria = db.define('MantencionMaquinaria', {
    idActivoM: {
        type: DataTypes.STRING(15),
        primaryKey: true,
    },
    idMantencion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    piezasMaquinariaMantencion: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
}, {
    timestamps: false,
});

module.exports = MantencionMaquinaria;