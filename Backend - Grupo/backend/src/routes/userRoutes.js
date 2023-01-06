import { Router } from 'express';
import * as userController from '../controllers/userController.js';

const router = Router();

//for login user
router.post("/login", userController.loginUser);
router.put("/update/:id", userController.updateUser);
router.post("/register", userController.postUser);
router.get("/", userController.getUser);
router.get('/user/:id', userController.getUserById);

export default router;