const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS for FCC testing

app.get("/", (req, res) => {
  res.send(`
    <h1>Request Header Parser Microservice</h1>
    <p>Use <code>/api/whoami</code> to get IP, language, and user agent</p>
  `);
});

app.get("/api/whoami", (req, res) => {
  res.json({
    ipaddress: req.ip || req.headers["x-forwarded-for"],
    language: req.headers["accept-language"],
    software: req.headers["user-agent"]
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
