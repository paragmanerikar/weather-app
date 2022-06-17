const { hasSubscribers } = require("diagnostics_channel");
const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const getWeather =require('./weather-service')

const port = 3000;
const publicDir = path.join(__dirname, "./public");
const viewDir = path.join(__dirname, "./templates/views");
const partialsDir = path.join(__dirname, "./templates/partials");

app.use(express.static(publicDir));
app.set("view engine", "hbs");
app.set("views", viewDir);

hbs.registerPartials(partialsDir);

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    author: "Parag M",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About us",
    author: "Parag M",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    author: "Parag M",
  });
});

app.get("/api/weather", (req, res) => {
  const location = req.query.search;
  getWeather(location,(data)=>{
    res.send(data);
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    author: "Parag M",
    errorMessage: "Page not found.",
  });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
