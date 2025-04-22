import express from "express";
import {
  createFlag,
  getAllFlags,
  getFlag,
  updateFlag,
  deleteFlag,
} from "../controllers/flagController.js";

const router = express.Router();

router.get("/", getAllFlags);
router.get("/:id", getFlag);
router.post("/", createFlag);
router.put("/:id", updateFlag);
router.delete("/:id", deleteFlag);

export default router;
