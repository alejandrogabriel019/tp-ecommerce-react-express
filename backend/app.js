const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
    origin: "*"
}));

app.use(express.json());

// RUTAS
const productosRoutes = require("./routes/productos");
app.use("/productos", productosRoutes);

// TEST API
app.get("/", (req, res) => {
    res.send("Backend funcionando");
});

// PUERTO (IMPORTANTE PARA RENDER)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor corriendo en puerto", PORT);
});