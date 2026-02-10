import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // <-- important
app.use(express.urlencoded({ extended: true }));




// GET route
app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Ayo" },
    { id: 2, name: "Blessing" },
    { id: 3, name: "Samuel" },
    { id: 4, name: "Ayo" },
  ]);
});




// POST route
app.post("/details", async (req, res) => {
  const { email, name } = req.body;

  if (!email || !name) {
    return res.status(400).json({ error: "Missing data" });
  }

  try {
    // Example: pretend we "save" the data
    const saved = { email, name, id: Date.now() };

    res.json({ success: true, data: saved });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Send error" });
  }
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
