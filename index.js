const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();


const db = mysql.createPool({
    host: "localhost",
    user:"root",
    password:"123456789",
    database: "BD_Portafolio",
    port:3306,
})


app.use(cors({
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({
    extended:true,
}));

app.get("/", (req,res) => {
    const sql = "SELECT * FROM Contacto";
    db.query(sql, (err,result) => {
        res.send(result);
    })
})


app.post("/contacto", (req, res) => {
    const nombre = req.body.nombre;
    const correo = req.body.correo;
    const proyecto = req.body.proyecto;
    const texto = req.body.texto;

    const sql = "INSERT INTO Contacto(Cli_nombre, Cli_correo,Cli_proyecto,Cli_mensaje) VALUES(?,?,?,?)";

    db.query(sql, [nombre,correo,proyecto,texto], (err,result) => {
        res.send("Usuario Ingresado Correctamente");
    })
})

app.listen(8080, () => {
    console.log("Escuchando en puerto 8080");
})