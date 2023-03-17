//DEPENDENCIES

const express = require("express");
const cors = require("cors");

//CONFIG
const app = express();

//MIDWARE
app.use(cors());
app.use(express.json());
// app.use("/deities",)

//ROUTES
app.get("/", (req, res) => {
    res.send("Meta-Mystic, online!")
});

app.get("*", (req, res) => {
    res.status(404).send("The Tome is closed to you.")
});

//EXPORT
module.exports = app;