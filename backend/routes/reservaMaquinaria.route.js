import { Router } from "express";

import {
    getMaquinarias,
    getMaquinaria,
    createMaquinaria,
    updateMaquinaria,
    deleteMaquinaria,
    getReservaMaquinarias,
    getReservaMaquinaria,
    createReservaMaquinaria,
    updateReservaMaquinaria,
    deleteReservaMaquinaria
} from '../controllers/reservaMaquinaria.controller.js';

const router = Router();

router.get('/maquinarias', getMaquinarias)
router.get('/reservaMaquinarias', getReservaMaquinarias)

router.get('/maquinaria/:id', getMaquinaria)
router.get('/reservaMaquinaria/:id', getReservaMaquinaria)

router.post('/maquinaria', createMaquinaria)
router.post('/reservaMaquinaria', createReservaMaquinaria)

router.put('/maquinaria/:id', updateMaquinaria)
router.put('/reservaMaquinaria/:id', updateReservaMaquinaria)

router.delete('/maquinaria/:id', deleteMaquinaria)
router.delete('/reservaMaquinaria/:id', deleteReservaMaquinaria)

export default router;