const fs = require("fs");
const path = require("path");
const userFile = path.join(__dirname, "../data/ejemplo.json");

// Leer todos los centros de votación
exports.readData = () => {
  try {
    if (!fs.existsSync(userFile)) return [];
    const jsonData = fs.readFileSync(userFile, "utf8");
    return jsonData ? JSON.parse(jsonData) : [];
  } catch (err) {
    console.error("❌ Error al leer ejemplo.json:", err.message);
    throw new Error("No se pudo leer el archivo de datos");
  }
};
