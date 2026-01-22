// Importar módulo de sistema de archivos
const fs = require("fs");
// Importar módulo de rutas
const path = require("path");
// Definir la ruta del archivo JSON de datos
const userFile = path.join(__dirname, "../data/ejemplo.json");

// Función para actualizar un registro existente por su ID
exports.updateData = (id, updatedData) => {
  // Bloque try-catch para manejo de errores
  try {
    // Verificar si el archivo existe, si no lanzar error
    if (!fs.existsSync(userFile)) {
      throw new Error("El archivo no existe");
    }

    // Leer el contenido del archivo
    const fileContent = fs.readFileSync(userFile, "utf8");
    // Parsear el JSON o usar array vacío si está vacío
    let currentData = fileContent ? JSON.parse(fileContent) : [];

    // Validar que currentData sea un array, si no, asignarlo como array vacío
    if (!Array.isArray(currentData)) currentData = [];

    // Encontrar el índice del registro con el ID especificado
    const index = currentData.findIndex(item => item.id === id);

    // Verificar si el registro fue encontrado
    if (index === -1) {
      throw new Error("Registro no encontrado");
    }

    // Mezclar los datos antiguos con los nuevos (actualización parcial)
    currentData[index] = {
      ...currentData[index],
      ...updatedData
    };

    // Escribir los datos actualizados en el archivo con formato indentado
    fs.writeFileSync(userFile, JSON.stringify(currentData, null, 2), "utf8");
    // Mostrar mensaje de éxito en consola
    console.log("✅ Datos actualizados correctamente.");
  } catch (error) {
    // Mostrar error en consola
    console.error("❌ Error al actualizar ejemplo.json:", error.message);
    // Lanzar error personalizado
    throw new Error("No se pudo actualizar el archivo de datos");
  }
};

