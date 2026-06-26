const db = require("./db");

db.serialize(() => {

    db.run(`
        CREATE TABLE IF NOT EXISTS productos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            precio INTEGER NOT NULL,
            imagen TEXT
        )
    `);

    db.run(`
    INSERT INTO productos (nombre, precio, imagen)
    VALUES
    ('Bocadito Marroc', 1200, 'https://www.felfort.com.ar/media/catalog/product/d/i/dise_o_sin_t_tulo_37_.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover'),
    ('Dos Corazones', 1500, 'https://www.felfort.com.ar/media/catalog/product/d/i/dise_o_sin_t_tulo_22_.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover'),
    ('Paragüitas de chocolate', 1100, 'https://www.felfort.com.ar/media/catalog/product/9/5/952_extra_1.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover'),
    ('Monedas de chocolate', 850, 'https://www.felfort.com.ar/media/catalog/product/1/6/1605_display.png?auto=webp&format=png&width=960&height=1200&fit=cover'),
    ('Bocadito Kooky Bon', 900, 'https://www.felfort.com.ar/media/catalog/product/0/6/0692_suelto.png?auto=webp&format=png&width=960&height=1200&fit=cover'),
    ('Bananita Felfort', 700, 'https://www.felfort.com.ar/media/catalog/product/2/_/2_actualizado_1.png?auto=webp&format=png&width=960&height=1200&fit=cover'),
    ('Tableta de chocolate con leche', 1400, 'https://www.felfort.com.ar/media/catalog/product/d/i/diabfort.png?auto=webp&format=png&width=960&height=1200&fit=cover'),
    ('Chupetín Chupelatin', 650, 'https://www.felfort.com.ar/media/catalog/product/2/_/2_actualizado_5.png?auto=webp&format=png&width=960&height=1200&fit=cover')
`);

});

console.log("Base de datos inicializada");