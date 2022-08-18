const express = require('express');

const router = express.Router();

const MusicController = require('../controllers/MusicControllers')


router.get('/', MusicController.listarMusic);

router.get('/:id', MusicController.mostrarPessoa);



module.exports = router;