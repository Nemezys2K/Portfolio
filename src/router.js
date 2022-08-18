const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    // res.send("Ola usuário!");
    const pessoas = require('./database/pessoas.json');
})

router.get('/:id', (req,res)=>{
    // res.send("Outro texto!");
    const id = req.params.id;

    const pessoas = require('./database/pessoas.json')
    const pessoa = pessoas.find(p => p.id == id);

    if (pessoa == undefined){
        res.send("Pessoa inexistente");
    }else{
        res.send(pessoa);
    }
})

// router.get('/musica',(req,res)=>{

//     const musicas = require('./database/musicas.json')
// })

module.exports = router;