const express = require('express');

const app = express();

const pessoaRouter = require('./src/routers/PessoasRouter');
app.use('/pessoas', pessoaRouter);
// app.use('/musicas', router);
const musicRouter = require('./src/routers/MusicRouter');
app.use('/music',musicRouter)




app.listen(3000, ()=>{console.log('Servidor rodando na porta 3000')});