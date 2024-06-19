import express from "express";
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    updateUserById,
    deleteUser
} from "../controllers/Users.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/users', verifyUser, getUsers);
router.get('/users/:id', verifyUser,  getUserById);
router.post('/users', verifyUser, createUser);
router.patch('/users/:id', verifyUser, adminOnly, updateUser);
router.patch('/users/:id', verifyUser,  updateUserById);
router.delete('/users/:id', verifyUser, adminOnly, deleteUser);

export default router;