/* La idea de las rutas es generar los diferentes paths para conectarse y consumir la api con sus respectivos metodos.
Es importante usar Router de express y definir sobre el las rutas usadas, luego se exporta como default */

import { Router } from 'express'
import { getUsers, getUser, createUser, deleteUser, updateUserInfo} from '../controllers/users.controllers.ts';

const router = Router()
// Read methods
router.get('/api/users', getUsers);
router.get('/api/user/:id', getUser,);

// Create Methods
router.post('/api/users', createUser);

// Update methods
router.put('/api/users/:id', updateUserInfo);

// Delete methods
router.delete('/api/users/:id', deleteUser);

export default router;