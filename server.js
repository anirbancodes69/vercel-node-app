const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.json({ message: "ignoring static page!" });
});

app.get("/api/products", (req, res) => {
  const data = fs.readFileSync("./data/products.json");
  res.json(JSON.parse(data));
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
