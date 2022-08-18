const express = require('express');

const router = express.Router();

router.get('/clientes',(req,res)=>{
    res.send("Ola usuário!");

})

router.get('/:id', (req,res)=>{
    // res.send("Outro texto!");
})
module.exports = router;