import express from 'express';
import acciones from '../services/acciones.service';
import { AccionesCreationAttributesI } from '../../type';

const router = express.Router();

router.get('/acciones/:id?', async (req, res) => {
    try {
        const { id } = req.params;
        if (id) {
            const accion = await acciones.getAccion(Number(id));
            res.json(accion);
        } else {
            const accionesGet = await acciones.getAcciones();
            res.json(accionesGet);
        }
    } catch (error) {
        res.status(400).json(error);
    }
});

router.post('/acciones', async (req, res) => {
    const { body } = req;
    try {
        const newAccion = await acciones.createAccion(body as AccionesCreationAttributesI);
        res.status(201).json(newAccion);
    } catch (error) {
        res.status(400).json(error);
    }
});

router.put('/acciones/:id', async (req, res) => {
    try {
        const updatedAccion = await acciones.updateAccion(Number(req.params.id), req.body as AccionesCreationAttributesI);
        res.status(200).json(updatedAccion);
    } catch (error) {
        res.status(400).json(error);
    }
});

router.delete('/acciones/:id?', async (req, res) => {
    try {
        if (typeof req.body === 'object' && 'ids' in req.body) {
            const ids = req.body.ids as number[];
            await acciones.deleteAcciones(ids);
            console.log(req.body);
        } else {
            await acciones.deleteAccion(Number(req.params.id));
        }

        res.status(200).json({ message: 'Accion deleted successfully' });
    } catch (error) {
        res.status(400).json(error);
    }
});

export default router;