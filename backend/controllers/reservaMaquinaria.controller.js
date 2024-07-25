import {pool} from '../db.js';
import { v4 as uuidv4 } from 'uuid';

//CRUD ingresar Maquinaria
export const getMaquinarias = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM MAQUINARIA ORDER BY ID_ACTIVO_M ASC");
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getMaquinaria = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM MAQUINARIA WHERE ID_ACTIVO_M = ?", [req.params.id]);
        if (result.length === 0) {
            return res.status(404).json({ message: `Maquinaria de id ${req.params.id} no existe` });
        }
        res.json(result[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createMaquinaria = async (req, res) => {
    const { NUM_INVENTARIO, ESTATUS, NOMBRE, COMPONENTES, CATEGORIA, MARCA, MODELO, NUM_SERIE, CENTRO_DE_COSTO, UBICACION } = req.body;
    const ID_ACTIVO_M = uuidv4().substring(0, 15);
    try {
        const query = `
            INSERT INTO MAQUINARIA (ID_ACTIVO_M, NUM_INVENTARIO, ESTATUS, NOMBRE, COMPONENTES, CATEGORIA, MARCA, MODELO, NUM_SERIE, CENTRO_DE_COSTO, UBICACION)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [ID_ACTIVO_M, NUM_INVENTARIO, ESTATUS, NOMBRE, COMPONENTES, CATEGORIA, MARCA, MODELO, NUM_SERIE, CENTRO_DE_COSTO, UBICACION];
        const [result] = await pool.query(query, values);
        res.status(201).json({
            ID_ACTIVO_M: result.insertId,
            NUM_INVENTARIO,
            ESTATUS,
            NOMBRE,
            COMPONENTES,
            CATEGORIA,
            MARCA,
            MODELO,
            NUM_SERIE,
            CENTRO_DE_COSTO,
            UBICACION,
            message: 'Maquinaria creada exitosamente'
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const updateMaquinaria = async (req, res) => { 
    try{
        const { NUM_INVENTARIO, ESTATUS, NOMBRE, COMPONENTES, CATEGORIA, MARCA, MODELO, NUM_SERIE, CENTRO_DE_COSTO, UBICACION } = req.body;
        const result = await pool.query("UPDATE MAQUINARIA SET ? WHERE ID_ACTIVO_M = ?", [
            req.body,
            req.params.id,
        ]);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteMaquinaria = async (req, res) => {
    try{
        const [result] = await pool.query("DELETE FROM MAQUINARIA WHERE ID_ACTIVO_M = ?", [req.params.id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: `Maquinaria with id ${req.params.id} not found` });
        }
        return res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// CRUD de ReservaMaquinaria
export const getReservaMaquinarias = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM MANEJA ORDER BY ID_ACTIVO_M ASC");
        // Formatear las fechas para que solo muestren YYYY-MM-DD
        const formattedResult = result.map(result => {
            return {
                ...result,
                FECHA_USO_MAQUINARIA: result.FECHA_USO_MAQUINARIA.toISOString().split('T')[0]
            };
        });
        res.json(formattedResult);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getReservaMaquinaria = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM MANEJA WHERE ID_ACTIVO_M = ?", [req.params.id]);
        if (result.length === 0) {
            return res.status(404).json({ message: `Maquinaria de id ${req.params.id} no existe` });
        }
        res.json(result[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createReservaMaquinaria = async (req, res) => {
    const { ID_ACTIVO_M, RUT_CLIENTE, FECHA_USO_MAQUINARIA, HORA_LLEGADA_USO_MAQUINARIA, DESCRIPCION_USO_MAQUINARIA, HORA_SALIDA_USO_MAQUINARIA } = req.body;
    try {
        console.log("Datos recibidos:", req.body);

        // Verificar si el ID_ACTIVO_M existe en la tabla MAQUINARIA
        const [maquinaria] = await pool.query("SELECT 1 FROM MAQUINARIA WHERE ID_ACTIVO_M = ?", [ID_ACTIVO_M]);
        console.log("Resultado de la verificación de maquinaria:", maquinaria);

        if (maquinaria.length === 0) {
            console.log("Maquinaria con ID ingresado no existe");
            return res.status(404).json({ message: "Maquinaria con ID ingresado no existe" });
        }

        // Insertar la nueva reserva
        const [result] = await pool.query(
            "INSERT INTO MANEJA (ID_ACTIVO_M, RUT_CLIENTE, FECHA_USO_MAQUINARIA, HORA_LLEGADA_USO_MAQUINARIA, DESCRIPCION_USO_MAQUINARIA, HORA_SALIDA_USO_MAQUINARIA) VALUES (?, ?, ?, ?, ?, ?)",
            [ID_ACTIVO_M, RUT_CLIENTE, FECHA_USO_MAQUINARIA, HORA_LLEGADA_USO_MAQUINARIA, DESCRIPCION_USO_MAQUINARIA, HORA_SALIDA_USO_MAQUINARIA]
        );
        console.log("Resultado de la inserción:", result);

        res.json({
            ID_RESERVA_MAQUINARIA: result.insertId,
            ID_ACTIVO_M,
            RUT_CLIENTE,
            FECHA_USO_MAQUINARIA,
            HORA_LLEGADA_USO_MAQUINARIA,
            DESCRIPCION_USO_MAQUINARIA,
            HORA_SALIDA_USO_MAQUINARIA,
            message: 'Reserva de maquinaria creada exitosamente'
        });
    } catch (error) {
        console.error("Error al crear la reserva de maquinaria:", error);
        res.status(500).json({ message: error.message });
    }
};

export const updateReservaMaquinaria = async (req, res) => {
    try{
        const { ID_ACTIVO_M, RUT_CLIENTE, FECHA_USO_MAQUINARIA, HORA_LLEGADA_USO_MAQUINARIA, DESCRIPCION_USO_MAQUINARIA, HORA_SALIDA_USO_MAQUINARIA } = req.body;
        const result = await pool.query("UPDATE MANEJA SET ? WHERE ID_RESERVA_MAQUINARIA = ?", [
            req.body,
            req.params.id,
        ]);
        res.json(result);
    } catch (error) {
        if (error.code === 'ER_NO_REFERENCED_ROW_2') {
            res.status(404).json({ message: "Maquinaria with that ID not found" });
        } else { 
            res.status(500).json({ message: error.message });
        }
    }
}

export const deleteReservaMaquinaria = async (req, res) => {
    try{
        const [result] = await pool.query("DELETE FROM MANEJA WHERE ID_RESERVA_MAQUINARIA = ?", [req.params.id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: `ReservaMaquinaria with id ${req.params.id} not found` });
        }
        console.log("ReservaMaquinaria eliminada exitosamente");
        return res.sendStatus(204).json({ message: "ReservaMaquinaria eliminada exitosamente" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

