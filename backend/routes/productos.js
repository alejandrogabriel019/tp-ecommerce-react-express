const express = require("express");
const db = require("../database/db");

const router = express.Router();


router.get("/",(req, res) => {
    
    db.all(
        "SELECT * FROM productos",
        [],
        (err, rows) => {

            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            res.json(rows);
        }
    );
});

router.post("/", (req, res) => {
    const { nombre, precio } = req.body;

    db.run(
        "INSERT INTO productos (nombre, precio) VALUES (?, ?)",
        [nombre, precio],
        function(err) {

            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            res.status(201).json({
                id: this.lastID,
                nombre,
                precio
            });
    
        }
    );

});
module.exports = router;