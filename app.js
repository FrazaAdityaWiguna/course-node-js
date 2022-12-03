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

app.use((req, res, next) => {
  console.log("new request mode");
  console.log("host:", req.hostname);
  console.log("path:", req.path);
  console.log("method:", req.method);

  // next for next from middleware (app.use)
  next();
});

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
