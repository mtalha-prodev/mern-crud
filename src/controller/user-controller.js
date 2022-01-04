import express from "express";
import {
  addUser,
  deleteUser,
  getUser,
  updateUser,
} from "./router/user-route.js";

const router = express.Router();

router.get("/", getUser);
router.post("/add", addUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

export default router;
