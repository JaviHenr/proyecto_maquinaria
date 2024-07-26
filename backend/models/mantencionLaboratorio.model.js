/**
 * BDD:
 * CREATE TABLE REALIZA (
    RUT_PERSONAL_LABORATORIO VARCHAR(12),
    ID_MANTENCION INT,
    HORA_INICIO_MANTENCION TIME,
    HORA_FINAL_MANTENCION TIME,
    FECHA_INICIO_MANTENCION DATE,
    FECHA_FINAL_MANTENCION DATE,
    CARACTERISTICAS_TECNICAS VARCHAR(150),
    PRIMARY KEY (RUT_PERSONAL_LABORATORIO, ID_MANTENCION),
    FOREIGN KEY (RUT_PERSONAL_LABORATORIO) REFERENCES PERSONAL_LABORATORIO(RUT_PERSONAL_LABORATORIO),
    FOREIGN KEY (ID_MANTENCION) REFERENCES MANTENCION(ID_MANTENCION)
);

 */
const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');

const MantencionLaboratorio = db.define('MantencionLaboratorio', {
    rutPersonalLaboratorio: {
        type: DataTypes.STRING(12),
        primaryKey: true,
    },
    idMantencion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    horaInicioMantencion: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    horaFinalMantencion: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    fechaInicioMantencion: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    fechaFinalMantencion: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    caracteristicasTecnicas: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
}, {
    timestamps: false,
});

module.exports = MantencionLaboratorio;