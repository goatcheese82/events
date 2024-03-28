import express from "express";
import authController from "../controllers/authController.mjs";

const router = express.Router();

router.get('/register', /*#swagger.tags=["Auth"]*/ authController.registerUser);
router.get('/login', /*#swagger.tags=["Auth"]*/ authController.loginUser);
router.get('/logout', /*#swagger.tags=["Auth"]*/ authController.logoutUser);


export default router;