import express from "express";
import events from "../routes/events.mjs";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json" assert { type: "json" };

const router = express.Router();


/*** Swagger */

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

/*** Index route */
router.get('/', (req, res) => res.send("Hello World"));

/*** events routes */
router.get('/events',  /*#swagger.tags=['events']*/ events);

export default router;