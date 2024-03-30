import express from "express";
import { AuthController } from "./authController";

const authController = new AuthController();

const router = express.Router();

router.post("/register", authController.register); // create a new user
router.post("/login", authController.login);

export const AuthRouter = router;
