import { Router } from "express";
import * as orderController from "../controllers/orderController.js";

const router = Router();

router.post("/", orderController.postOrder);
router.get("/", orderController.getOrders);
router.get("/:id", orderController.getOrder);
router.get("/mine/:id", orderController.getMyOrders);

export default router;
