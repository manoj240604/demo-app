const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to Demo App version 1.0");
});

app.listen(3000, () => {
    console.log("Demo App is running on port 3000");
});