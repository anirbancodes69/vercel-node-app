// index.js
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Route 1: Home Route
app.get("/", (req, res) => {
  res.send("Welcome to the Vercel Node.js App!");
});

// Route 2: API Route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from Vercel API!" });
});

// Route 3: User Route
app.get("/api/users", (req, res) => {
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
  ];
  res.json(users);
});

// Route 4: Add a new user
app.post("/api/users", (req, res) => {
  const { name } = req.body;
  res.json({ message: `User ${name} added successfully!` });
});

// Start the server (for local testing)
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
