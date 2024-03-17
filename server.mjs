import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import "express-async-errors";
import events from "./routes/events.mjs";
import users from "./routes/users.mjs";
import home from "./routes/index.mjs";
import bodyParser from "body-parser";


const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use("/users", users);
app.use("/events", events);
app.use("/", home);


app.use((err, _req, res, next) => {
   res.status(500).send("Something went wrong!")
})

app.listen(PORT, () => {
   console.log(`Server is running on port: ${PORT}`);
});