import { Router } from "express";
import { GetCropDetails } from "../controllers/GetCropDetails.js";
import upload from "../middleware/multer.js";
import { sentiment } from "../controllers/APICONTROLLER.js";

const router = Router();

router.post("/crophealth", upload.single("image"), GetCropDetails);
router.post("/sentiment", sentiment);

export default router;
