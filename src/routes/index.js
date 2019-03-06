/**
 *  Instancia de las dependencias necesarias
 */
const express = require('express');
// necesitamos 'express' para hacer uso de su propiedad 'Router'
const router = express.Router();


//-- server routes

//principal
router.get('/', (req, res) => {
    res.render('index.html', { title: 'Simple Page (Nodejs)', texto: 'Línea de texto' });
});

//contact page
router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'Página de contacto' });
});



//-- fin del módulo: pasamos todas las rutas
module.exports = router;

