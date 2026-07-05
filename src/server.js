const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

console.log("Server starting...");
console.log("Speech Key exists:", !!process.env.SPEECH_KEY);

app.use(cors());
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "../public")));

// API route
app.get("/api/config", (req, res) => {
    res.json({
        speechKey: process.env.SPEECH_KEY,
        speechRegion: process.env.SPEECH_REGION
    });
});

// IMPORTANT: no wildcard route (fixes your crash)

app.listen(PORT, () => {
    console.log(`EchoAI running at http://localhost:${PORT}`);
});