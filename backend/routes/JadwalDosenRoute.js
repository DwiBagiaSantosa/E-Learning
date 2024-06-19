import express from "express";
import {
    getJadwalDosens,
    getJadwalDosenbyId,
    createJadwalDosen,
    updateJadwalDosen,
    deleteJadwalDosen
} from "../controllers/JadwalDosens.js";
import { verifyUser, dosenOnly } from "../middleware/AuthUser.js";
const router = express.Router();

router.get('/jadwal_dosen', verifyUser, dosenOnly, getJadwalDosens);
router.get('/jadwal_dosen/:id', verifyUser, dosenOnly, getJadwalDosenbyId);
router.post('/jadwal_dosen', verifyUser, dosenOnly, createJadwalDosen);
router.patch('/jadwal_dosen/:id', verifyUser, dosenOnly, updateJadwalDosen);
router.delete('/jadwal_dosen/:id', verifyUser, dosenOnly, deleteJadwalDosen);

export default router;