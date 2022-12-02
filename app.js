const express = require("express");

// express application
const app = express();
const port = 3000;

// register view engine with ejs
app.set("view engine", "ejs");

// if folder views change name
// app.set("views", "myViews");

// listen for request
app.listen(port);

app.get("/", (req, res) => {
  // res.send("<p>hello express</p>");

  // console.log("Dirname: ", __dirname);
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

// redirect
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.get("/blogs/create", (req, res) => {
  res.render("create");
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404");
});
