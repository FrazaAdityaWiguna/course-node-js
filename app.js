const express = require("express");

// express application
const app = express();
const port = 3000;

// listen for request
app.listen(port);

app.get("/", (req, res) => {
  // res.send("<p>hello express</p>");

  // console.log("Dirname: ", __dirname);
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

// redirect
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// 404 page
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
