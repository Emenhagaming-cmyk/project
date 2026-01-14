const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1>Server dari HP 🚀</h1>
    <p>Node.js + Express jalan di Ubuntu UserLAnd</p>
    <p>Repo: GitHub tersambung ✔️</p>
  `);
});

app.listen(3000, () => {
  console.log("Server jalan di http://localhost:3000");
});const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Web server dari hp hhh 🚀</h1><p>MyApp sudah online</p>");
});

app.listen(3000, () => {
  console.log("Server jalan di http://localhost:3000");
});
