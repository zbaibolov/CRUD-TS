import { Router } from 'express';
import UserController from './user.controller';

const router: Router = Router();
const userController: UserController = new UserController();

router.get("/", userController.findAll);
router.post("/", userController.create);
router.put("/:id", userController.update);
router.delete("/:id", userController.delete);

export default router;
