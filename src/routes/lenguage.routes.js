import { Router } from "express";
import { methods as lenguageController } from "../controllers/lenguage.controller.js";

const router = Router()

router.get('/', lenguageController.getLanguages)
router.get('/:id', lenguageController.getLanguage)
router.post('/', lenguageController.addLanguage)
router.delete('/:id', lenguageController.deleteLanguage)
router.put('/:id', lenguageController.editLanguage)

export default router