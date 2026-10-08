const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Mostra il nostro sito
app.use(express.static(__dirname));

// Test del server
app.get("/api/test", (req, res) => {
    res.json({
        success: true,
        message: "StickerBridge server funziona!"
    });
});

app.listen(PORT, () => {
    console.log(`StickerBridge avviato su http://localhost:${PORT}`);
});