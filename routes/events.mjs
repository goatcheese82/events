import express from "express";
import eventsController from "../controllers/eventsController.mjs";
import utilities from "../utilities/index.mjs";

const router = express.Router();

/*** Events Controller */

/* Get Routes */

router.get('/', /*#swagger.tags=["Events"]*/ eventsController.getAllEvents);
router.get('/:id', /*#swagger.tags=["Events"]*/ eventsController.getEventById);

/* Post Routes */

router.post('/', /*#swagger.tags=["Events"] */ eventsController.createEvent);

router.patch('/:id', /*#swagger.tags=["Events"] */ eventsController.updateEvent);

router.delete('/:id', /*#swagger.tags=["Events"]*/ eventsController.deleteEvent);

export default router;