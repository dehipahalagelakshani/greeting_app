const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

let username = "";

// Home page
app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome</h1>
    <form method="POST" action="/submit">
      <input type="text" name="name" placeholder="Enter your name" required>
      <br><br>
      <button type="submit">Get Greeting</button>
    </form>
  `);
});

// POST request
app.post("/submit", (req, res) => {
  username = req.body.name;
  res.redirect("/hello");
});

// GET request
app.get("/hello", (req, res) => {
  res.send(`<h1>Hello, ${username}!</h1><a href="/">Go Back</a>`);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});