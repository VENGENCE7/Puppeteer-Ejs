import express from "express";
import mongoose from "mongoose";

import user_router from "./routes/Data";

// SEREVR PORT
const Port = 5000;
// DataBAse URL
const Mongo_URI =
  "mongodb+srv://admin:XctGvPKYMqz8Ox7x@pup_ejs.2fis80u.mongodb.net/Pup-Ejs?retryWrites=true&w=majority";

const user_Router = user_router;

// express config
const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

app.use("/user", user_Router);

app.get("/", (req, res) => {
  res.render("index", {
    username: "Bhavish",
    mail: "bhavish007anand@gmail.com",
    message: "Welcome !!",
  });
});

app.get("/form", (req, res) => {
  res.render("form", {
    message: "ENter data",
  });
});

app.get("/user", (req, res) => {
  res.render("user", {
    message: "Press 'Show-All' to display all data ",
  });
});

mongoose
  .connect(Mongo_URI, {
    // Connection Options for smooth communications
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected Successfully !!! "))
  .then(() => app.listen(Port, () => console.log(`Listening on PORT ${Port}`)))
  .catch((err) => console.log(err, "\n Error connecting to database :("));
