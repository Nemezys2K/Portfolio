const express = require('express');

const app = express();

const router = require('./src/router');
app.use('/pessoas', router);
// app.use('/musicas', router);



app.listen(3000, ()=>{console.log('Servidor rodando na porta 3000')});