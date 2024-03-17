import express from "express";
import eventsController from "../controllers/eventsController.mjs";

const router = express.Router();

router.get('/', eventsController.getAllEvents);
router.get('/:id', eventsController.getEventById);

router.post('/', eventsController.createEvent);

router.patch('/:id', eventsController.updateEvent);

router.delete('/:id', eventsController.deleteEvent);

export default router;