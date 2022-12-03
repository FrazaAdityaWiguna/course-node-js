const express = require("express");
const morgan = require("morgan");

// express application
const app = express();
const port = 3000;

// register view engine with ejs
app.set("view engine", "ejs");

// if folder views change name
// app.set("views", "myViews");

// listen for request
app.listen(port);

app.use(morgan("dev"));

app.get("/", (req, res) => {
  // res.send("<p>hello express</p>");

  const blogs = [
    { title: "Fraza aditya wiguna", snippet: "lorem ipsum dolor sit amet" },
    { title: "Nada zubaidah", snippet: "lorem ipsum dolor sit amet" },
    { title: "next money future", snippet: "lorem ipsum dolor sit amet" },
  ];

  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// redirect
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404  " });
});
