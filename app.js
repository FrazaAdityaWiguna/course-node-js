const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
const { render } = require("express/lib/response");

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

// middleware static file
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// redirect
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// Blog routes
app.get("/blogs", (req, res) => {
  Blog.find()
    // sort as descending
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => console.log(err));
});

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
app.get("/blog/:id", (req, res) => {
  const idBlog = req.params.id;

  Blog.findById(idBlog)
    .then((result) => {
      res.render("details", { title: "Blog Details", blog: result });
    })
    .catch((err) => console.log(err));
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

// post blog
app.post("/post-blog", (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => console.log(err));
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404  " });
});
