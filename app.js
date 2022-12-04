const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

// express application
const app = express();
const port = 3000;

// connect to monggoDB
const dbURI =
  "mongodb+srv://admin:admin1234@nodetuts.ydef603.mongodb.net/note-tuts?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    console.log("Connect to MongoDB");
    app.listen(port);
  })
  .catch((err) => console.log("err: ", err));

// register view engine with ejs
app.set("view engine", "ejs");

// if folder views change name
// app.set("views", "myViews");

// middleware static file
app.use(express.static("public"));

app.use(morgan("dev"));

// mongoose and mongo sandbox routes
app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "new blog 2",
    snippet: "about my new blog",
    body: "more about my new blog",
  });

  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

// get all data blogs
app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

// get single blog
app.get("/single-blog", (req, res) => {
  Blog.findById("638caead270103a3e761cc17")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
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
