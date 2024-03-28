import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import "express-async-errors";
import events from "./routes/events.mjs";
import users from "./routes/users.mjs";
import home from "./routes/index.mjs";
import bodyParser from "body-parser";
import passport from "passport";
import session from "express-session";
import morgan from 'morgan';


const PORT = process.env.PORT || 3000;
const app = express();


if (process.env.NODE_ENV === 'development') {
   app.use(morgan('dev'));
}

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use("/users", users);
app.use("/events", events);
app.use("/", home);


//Middleware

app.use(session({
   secret: '',
   resave: false,
   saveUninitialized: true,
   cookie: {secure: true}
}));

app.use(passport.initialize());
app.use(passport.session());




app.use((err, _req, res, next) => {
   res.status(500).send("Something went wrong!")
})

app.listen(PORT, () => {
   console.log(`Server is running in ${process.env.NODE_ENV} mode on port: ${PORT}`);
});