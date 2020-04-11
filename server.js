const express = require('express')
const app = express()

const hbs = require('hbs');
require('./hbs/helpers');

// obtener puerto (1era opción no existe en entorno local, si en heroku)
const port = process.env.PORT || 3000;

// Para servir contenido estático (html por ej) 
// Middleware para servir (En primer lugar archivo index), si se desea
// servir otro archivo en mismo folder /public , se debe especificar
// por ejemplo /home.html en el url del navegador.
app.use(express.static(__dirname + '/public'));

// Express HBS engine 

// Using hbs as the default view engine requires just one line of code in your app setup. 
// This will render.hbs files when res.render is called.

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  
  res.render('home', {
    nombre: 'manuel',
    // se borra y utiliza helper 
    //anio: new Date().getFullYear()
  });

});
app.get('/about', (req, res) => {
  
  res.render('about', {
    // se borra y utiliza helper
    // anio: new Date().getFullYear()
  });

});


// app.get('/', (req, res) => {
//   //res.send('Hola mundo!');
//   let salida = {
//     nombre: 'Manuel',
//     edad: 24,
//     url: req.url
//   }

//   res.send(salida);
// })

app.listen(port, () => {
  console.log("Escuchando peticiones en el puerto 3000");
})