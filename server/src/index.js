const express = require("express"); 
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

mongoose
  .connect("mongodb://localhost:27017/blog-platform")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error);
  });

app.listen(3000, () => {
  console.log("Server is Running on Port:3000");
});
