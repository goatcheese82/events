import express from "express";
import usersController from "../controllers/usersController.mjs";
import utilities from "../utilities/index.mjs";
import validate from "../utilities/validation.mjs";

const router = express.Router();

/*** Users Controller */

/* Get Routes */

router.get('/', /*#swagger.tags=["Users"]*/ utilities.handleErrors(usersController.getAllUsers));
router.get('/:id', /*#swagger.tags=["Users"]*/ utilities.handleErrors(usersController.getUserById));

/* Post Routes */

router.post('/', /*#swagger.tags=["Users"]*/ validate.userRules(), validate.validate, utilities.handleErrors(usersController.createUser));

router.patch('/:id', /*#swagger.tags=["Users"] */ utilities.handleErrors(usersController.updateUser));

router.delete('/:id', /*#swagger.tags=["Users"]*/ utilities.handleErrors(usersController.deleteUser));

export default router;