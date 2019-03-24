const { setInformacionCurso } = require('./curso.js');
const fs = require('fs');
const express = require('express')
const app = express()
 

let impresionWeb = (curso, nombre, cedula) => {
    let { id, nombrecurso, duracion, valor } = curso
    candidato = 'El(La) estudiante: ' + nombre + ' con número de identificación: ' + cedula + ' ha inscrito el '
    infocurso = setInformacionCurso(id, nombrecurso, duracion, valor)
    texto = candidato + infocurso
    app.get('/', function (req, res) {
    res.send(texto)})
    app.listen(3000)
}



module.exports = {
    impresionWeb
};

