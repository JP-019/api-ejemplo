const express = require("express");
const router = express.Router();
const { readData, saveData } = require("../controller/EjemploController");

// GET - Leer todos los centros
router.get("/", (req, res) => {
  try {
    const data = readData();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST - Guardar nuevo centro
router.post("/", (req, res) => {
  try {
    console.log("Body recibido:", req.body);
    saveData(req.body);
    res.json({ mensaje: "Centro agregado correctamente", datos: req.body });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
