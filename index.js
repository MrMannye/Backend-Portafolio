const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();


const db = mysql.createPool({
    host: "localhost:3306",
    user:"root",
    password:"123456789",
    database: "BD_Portafolio",
})


app.use(cors({
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({
    extended:true,
}));



app.post("/contacto", (req, res) => {
    const nombre = req.body.nombre;
    const correo = req.body.correo;
    const proyecto = req.body.proyecto;
    const texto = req.body.texto;

    const sql = "INSERT INTO Contacto(Cli_nombre, Cli_correo,Cli_proyecto,Cli_mensaje) VALUES(?,?,?,?)";

    db.query(sql, [nombre,correo,proyecto,texto], (err,result) => {
        result.send("Usuario Ingresado Correctamente");
    })
})