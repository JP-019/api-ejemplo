// routes/routes.js
const express = require("express");
const router = express.Router();

const ejemploController = require("./modulo.routes");
// Registrar rutas
try {
    router.use("/ejemplo", ejemploController);
} catch (error) {
    console.log(error);
    
}

module.exports = router;
