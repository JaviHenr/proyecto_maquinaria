const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');

const MantencionExterna = db.define('MantencionExterna', {
    idMantencion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    idActivo: {
        type: DataTypes.STRING(15),
        allowNull: false,
    },
    fechaMantencion: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    horaInicioMantencion: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    horaFinalMantencion: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    caracteristicasTecnicas: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
}, {
    timestamps: false,
});

module.exports = MantencionExterna;