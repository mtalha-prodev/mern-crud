import express from "express";
import cors from "cors";
import route from "./src/controller/user-controller.js";
import mongoose from "mongoose";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
new mongoose.connect("mongodb://localhost:27017/")
  .then(() => console.log("Database Connect successfully..."))
  .catch(() => console.log("datatabase fail...."));

app.use("/", route);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running  ${PORT}`));
