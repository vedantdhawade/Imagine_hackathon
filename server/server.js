import express from "express";
import croprouter from "./routes/CropsHealth.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));

app.use("/api/crops", croprouter);

app.listen(5000, () => {
  console.log("server Listening");
});
