import express from "express";
import { addSchool, listSchool } from "../controllers/school.controller";

const router = express.Router();

router.post("/addSchool", addSchool);
router.get("/listSchool", listSchool);

export default router;
