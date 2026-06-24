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
    ('Bocadito Marroc', 1200),
    ('Dos Corazones', 1500),
    ('Paragüitas de chocolate', 1100),
    ('Monedas de chocolate', 850),
    ('Bocadito Kooky Bon', 900),
    ('Bananita Felfort', 700),
    ('Tableta de chocolate con leche', 1400),
    ('Chupetín Chupelatin', 650)
`);

});

console.log("Base de datos inicializada");