const fs = require("fs");
const path = require("path");
const userFile = path.join(__dirname, "../data/ejemplo.json");

// Eliminar un centro de votación por ID
exports.deleteData = (id) => {
  try {
    if (!fs.existsSync(userFile)) {
      throw new Error("El archivo no existe");
    }

    const fileContent = fs.readFileSync(userFile, "utf8");
    let currentData = fileContent ? JSON.parse(fileContent) : [];

    if (!Array.isArray(currentData)) currentData = [];

    const newData = currentData.filter(item => item.id !== id);

    if (newData.length === currentData.length) {
      throw new Error("Registro no encontrado");
    }

    fs.writeFileSync(userFile, JSON.stringify(newData, null, 2), "utf8");
    console.log("✅ Datos eliminados correctamente.");
  } catch (error) {
    console.error("❌ Error al eliminar ejemplo.json:", error.message);
    throw new Error("No se pudo eliminar el registro");
  }
};


