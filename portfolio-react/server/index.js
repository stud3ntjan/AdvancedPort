const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config(); // Lädt Umgebungsvariablen aus der .env-Datei

const app = express();

// Middleware
app.use(cors()); // Erlaubt Cross-Origin-Anfragen
app.use(express.json()); // Ermöglicht das Parsen von JSON-Anfragen

// Test-Route, um sicherzustellen, dass das Backend läuft
app.get("/", (req, res) => {
  res.send("Backend läuft!");
});

// Nodemailer-API-Route
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Nodemailer Transporter einrichten
  let transporter = nodemailer.createTransport({
    service: "Gmail", // du kannst hier auch andere Dienste verwenden
    auth: {
      user: process.env.EMAIL_USER, // dein E-Mail-Account
      pass: process.env.EMAIL_PASS, // dein E-Mail-Passwort
    },
  });

  // Mail Optionen
  let mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Neue Nachricht von ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("E-Mail erfolgreich versendet");
  } catch (error) {
    console.error("Fehler beim Senden der E-Mail:", error);
    res.status(500).send("Fehler beim Senden der E-Mail");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
