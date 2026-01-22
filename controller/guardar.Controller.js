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

