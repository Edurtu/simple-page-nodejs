/**
 * Dependencias
 */
const express = require('express');
const path = require('path');

/**
 * Ejecutar servidor
 */
const app = express();

//-- settings
//asigna el nº del puerto a la variable 'port'
//interesa crear las variables dentro de nuestra clase app
app.set('port', 3000);
app.set('views', path.join(__dirname + '/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


//-- middlewares 
// funciones intermedias después de recibir la petición del cliente
// y antes de ejecutar nada, por ejemplo comprobar las credenciales
// del cliente cuando realiza una determindad consulta.
// Es un proceso previo antes de darselo a las rutas (routes)



//-- server routes
//petición en el raiz
/*
app.get('/', (req, res) => {
    //(1) res.send('Hola, servidor en marcha!')
    //(2) res.sendFile(path.join(__dirname + '/views/index.html'));
    //(3) res.render(path.join(__dirname + '/views/index.ejs'));
    //(4) res.render('index.ejs');
    //(5) res.render('index.ejs', { title: 'Titulo desde variable', texto: 'Un texto cualquiera enviado desde Node' });
});
*/
app.use(require('./routes/index'));



//-- statics files (http, css, icons, images, ...)
app.use(express.static(path.join(__dirname + '/public')));



//-- listening the server
app.listen(app.get('port'), () => {
    console.log('Server working on port', app.get('port'));
});