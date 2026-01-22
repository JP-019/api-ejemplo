const fs = require("fs");
const path = require("path");
const userFile = path.join(__dirname, "../data/ejemplo.json");

// Actualizar un centro de votación por ID
exports.updateData = (id, updatedData) => {
  try {
    if (!fs.existsSync(userFile)) {
      throw new Error("El archivo no existe");
    }

    const fileContent = fs.readFileSync(userFile, "utf8");
    let currentData = fileContent ? JSON.parse(fileContent) : [];

    if (!Array.isArray(currentData)) currentData = [];

    const index = currentData.findIndex(item => item.id === id);

    if (index === -1) {
      throw new Error("Registro no encontrado");
    }

    // Mezcla datos antiguos con los nuevos
    currentData[index] = {
      ...currentData[index],
      ...updatedData
    };

    fs.writeFileSync(userFile, JSON.stringify(currentData, null, 2), "utf8");
    console.log("✅ Datos actualizados correctamente.");
  } catch (error) {
    console.error("❌ Error al actualizar ejemplo.json:", error.message);
    throw new Error("No se pudo actualizar el archivo de datos");
  }
};

