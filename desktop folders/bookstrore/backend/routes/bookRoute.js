import express from "express";
import {
  createbook,
  getAllbooks,
  updatebooks,
  deletebooks,
} from "../controller/controller.bookstore.js";

const router = express.Router();

router.post("/", createbook).get("/", getAllbooks);
router.put("/:id", updatebooks).delete("/:id", deletebooks);

export default router;
