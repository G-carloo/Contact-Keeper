const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
const conn = connectDB();

connectDB();

app.get("/", (req, res) => res.json({ msg: "Welcome to the Contact Keeper" }));

// Define Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/users", require("./routes/users"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started  on port ${PORT}`));
