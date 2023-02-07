import express from 'express';
import {
    getUsers,
    addUser,
    getUser,
    updateUser,
    deleteUser,
} from '../controllers/user.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', addUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/:id', getUser);

export default router;
