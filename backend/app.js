const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const productosRoutes = require("./routes/productos");

app.use("/productos", productosRoutes);

app.get("/",(req, res) => {
    res.send("Backend funcionando");
});

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});