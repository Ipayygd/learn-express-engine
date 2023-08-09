const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;

// gunakan ejs
app.set("view engine", "ejs");
app.use(expressLayouts);

app.get("/", (req, res) => {
  const users = [
    {
      nama: "Raifal Hangga Reksa",
      email: "ipayygd@gmail.com",
    },
    {
      nama: "Deevano Hangga Reksa",
      email: "deevanogd@gmail.com",
    },
  ];

  res.render("index", {
    title: "Homepage",
    nama: "Raifal Hangga",
    kelas: "Teknik Industri",
    details: users,
    layout: "layouts/main-layout",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About page",
    layout: "layouts/main-layout",
  });
});

app.get("/project", (req, res) => {
  res.render("project", {
    title: "Project page",
    layout: "layouts/main-layout",
  });
});

app.listen(port, () => {
  console.log(`Server ready on port ${port}`);
});
