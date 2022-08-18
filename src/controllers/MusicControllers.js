const PessoasController = {

    listarMusic: (req, res) => {

        // Carregar o array de database/pessoas.json 
        const music = require('../database/musicas.json');

        // Enviar o array de pessoas para o cliente
        res.send(music);

    },

    mostrarMusic: (req, res) => {

        // Capturar o id pedido pelo cliente (req.params)
        const id = req.params.id;

        // Levantar a pessoa que tem o id pedido
        const musicas = require('../database/musicas.json');
        const music = pessoas.find(p => p.id == id);

        // Retornar/enviar a pessoa encontrada ou uma mensagem: "Pessoa inexistente"
        if (music == undefined) {
            res.send("Música inexistente");
        } else {
            res.send(music);
        }
    }
}

module.exports = MusicControllers;

