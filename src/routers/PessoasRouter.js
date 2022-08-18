const express = require('express');

const router = express.Router();

const PessoasController = require('../controllers/PessoasControllers')


router.get('/',PessoasController.listarPessoas);

router.get('/:id', PessoasController.mostrarPessoa);



module.exports = router;