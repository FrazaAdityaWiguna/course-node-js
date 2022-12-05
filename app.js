const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

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

// Blog Router
app.use("/blogs", blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404  " });
});
