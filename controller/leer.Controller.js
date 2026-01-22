// Importar módulo de sistema de archivos
const fs = require("fs");
// Importar módulo de rutas
const path = require("path");
// Definir la ruta del archivo JSON de datos
const userFile = path.join(__dirname, "../data/ejemplo.json");

// Función para leer todos los registros del archivo JSON
exports.readData = () => {
  // Bloque try-catch para manejo de errores
  try {
    // Verificar si el archivo existe, si no retornar array vacío
    if (!fs.existsSync(userFile)) return [];
    // Leer el contenido del archivo en formato UTF-8
    const jsonData = fs.readFileSync(userFile, "utf8");
    // Parsear el JSON y retornar, o retornar array vacío si está vacío
    return jsonData ? JSON.parse(jsonData) : [];
  } catch (err) {
    // Mostrar error en consola
    console.error("❌ Error al leer ejemplo.json:", err.message);
    // Lanzar error personalizado
    throw new Error("No se pudo leer el archivo de datos");
  }
};
