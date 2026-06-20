const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database/productos.db", (err) => {
    if (err) {
        console.error("Error al conectar con SQLite", err);
    } else {
        console.log("SQLite conectado");
    }
});

module.exports = db;