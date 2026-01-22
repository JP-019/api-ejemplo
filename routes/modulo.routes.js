const express = require("express");
const router = express.Router();

const { saveData } = require("../controller/guardar.Controller");
const {updateData} = require("../controller/actualizar.Controller");
const { readData } = require("../controller/leer.Controller");
const { deleteData } = require("../controller/eliminar.Controller");

// GET - Leer todos los s
router.get("/", (req, res) => {
  try {
    const data = readData();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST - Guardar nuevo 
router.post("/", (req, res) => {
  try {
    console.log("Body recibido:", req.body);
    saveData(req.body);
    res.json({
      mensaje: " agregado correctamente",
      datos: req.body
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT - Actualizar  por ID
router.put("/:id", (req, res) => {
  try {
    const { id } = req.params;
    updateData(Number(id), req.body);

    res.json({
      mensaje: " actualizado correctamente",
      id,
      cambios: req.body
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE - Eliminar  por ID
router.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;
    deleteData(Number(id));

    res.json({
      mensaje: " eliminado correctamente",
      id
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
