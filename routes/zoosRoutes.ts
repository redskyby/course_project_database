import { Router } from "express";
import zoosController from "../controllers/zoosController";

const router = Router();

router.post("/add", zoosController.addZoo);
router.get("/getAllZoos", zoosController.getAllZoos);
router.delete("/deleteZoo", zoosController.deleteZoo);
router.get("/sortBy", zoosController.sortBy);
router.put("/editVaccinationById", zoosController.editZooById);
export default router;
