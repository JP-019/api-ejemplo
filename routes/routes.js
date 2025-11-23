// routes/routes.js
const express = require("express");
const router = express.Router();

const ejemploController = require("./ejemplo");


router.use("/ejemplo", ejemploController);


module.exports = router;
