// Importar módulo de sistema de archivos
const fs = require("fs");
// Importar módulo de rutas
const path = require("path");
// Definir la ruta del archivo JSON de datos
const userFile = path.join(__dirname, "../data/ejemplo.json");

// Función para eliminar un registro por su ID
exports.deleteData = (id) => {
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

    // Filtrar los datos excluyendo el registro con el ID especificado
    const newData = currentData.filter(item => item.id !== id);

    // Verificar si se encontró y eliminó el registro
    if (newData.length === currentData.length) {
      throw new Error("Registro no encontrado");
    }

    // Escribir los datos actualizados (sin el registro eliminado) en el archivo
    fs.writeFileSync(userFile, JSON.stringify(newData, null, 2), "utf8");
    // Mostrar mensaje de éxito en consola
    console.log("✅ Datos eliminados correctamente.");
  } catch (error) {
    // Mostrar error en consola
    console.error("❌ Error al eliminar ejemplo.json:", error.message);
    // Lanzar error personalizado
    throw new Error("No se pudo eliminar el registro");
  }
};


