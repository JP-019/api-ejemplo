// index.js
const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rutas principales
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("✅ Servidor funcionando correctamente");
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor iniciado en http://localhost:${PORT}`);
});
