// Importar módulo de sistema de archivos
const fs = require("fs");
// Importar módulo de rutas
const path = require("path");
// Definir la ruta del archivo JSON de datos
const userFile = path.join(__dirname, "../data/ejemplo.json");

// Función para guardar un nuevo registro en el archivo JSON
exports.saveData = (newData) => {
  // Bloque try-catch para manejo de errores
  try {
    // Inicializar array vacío para los datos actuales
    let currentData = [];
    // Verificar si el archivo existe
    if (fs.existsSync(userFile)) {
      // Leer el contenido del archivo
      const fileContent = fs.readFileSync(userFile, "utf8");
      // Parsear el contenido o usar array vacío si está vacío
      currentData = fileContent ? JSON.parse(fileContent) : [];
    }

    // Validar que currentData sea un array, si no, asignarlo como array vacío
    if (!Array.isArray(currentData)) currentData = [];

    // Agregar el nuevo dato al array
    currentData.push(newData);

    // Escribir el array actualizado en el archivo con formato indentado
    fs.writeFileSync(userFile, JSON.stringify(currentData, null, 2), "utf8");
    // Mostrar mensaje de éxito en consola
    console.log("✅ Datos agregados correctamente.");
  } catch (error) {
    // Mostrar error en consola
    console.error("❌ Error al guardar ejemplo.json:", error.message);
    // Lanzar error personalizado
    throw new Error("No se pudo guardar el archivo de datos");
  }
};

