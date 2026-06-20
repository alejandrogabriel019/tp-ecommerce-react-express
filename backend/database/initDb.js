const db = require("./db");

db.serialize(() => {

    db.run(`
        CREATE TABLE IF NOT EXISTS productos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            precio INTEGER NOT NULL
        )
    `);

    db.run(`
        INSERT INTO productos (nombre, precio)
        VALUES
        ('Chocolate', 800),
        ('Gomitas', 500),
        ('Paleta', 300)
    `);

});

console.log("Base de datos inicializada");