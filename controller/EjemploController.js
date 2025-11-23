const fs = require("fs");
const path = require("path");
const userFile = path.join(__dirname, "../data/ejemplo.json");

// Guardar un nuevo centro de votación
exports.saveData = (newData) => {
  try {
    let currentData = [];
    if (fs.existsSync(userFile)) {
      const fileContent = fs.readFileSync(userFile, "utf8");
      currentData = fileContent ? JSON.parse(fileContent) : [];
    }

    if (!Array.isArray(currentData)) currentData = [];

    // Agregar nuevo dato
    currentData.push(newData);

    fs.writeFileSync(userFile, JSON.stringify(currentData, null, 2), "utf8");
    console.log("✅ Datos agregados correctamente.");
  } catch (error) {
    console.error("❌ Error al guardar ejemplo.json:", error.message);
    throw new Error("No se pudo guardar el archivo de datos");
  }
};

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
