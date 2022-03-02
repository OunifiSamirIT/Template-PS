import express from "express";

const router = express.Router();

//controller
import {register} from "../controllers/auth";

router.post("/authen", register);

module.exports = router;