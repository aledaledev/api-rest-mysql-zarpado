import { Router } from "express";
import { methods as lenguageController } from "../controllers/lenguage.controller.js";

const router = Router()

router.get('/', lenguageController.getLanguage)

export default router