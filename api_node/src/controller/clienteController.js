const Cliente = require("../model/Cliente");

module.exports = {

    async index(req, res) {
        const cliente = await Cliente.findAll();

        return res.json(cliente);
    },
    async findByid(req, res) {
        const { id } = req.params;
        const cliente = await Cliente.findAll({
            where: {
                id: id
            }
        });
        return res.json(cliente[0]);
    },
    async store(req, res) {
        const { nome, endereco, cpf, telefone, email } = req.body;
        const cliente = await Cliente.create({
            nome, endereco, cpf, telefone, email
        });
        return res.json(cliente);
    },
    async delete(req, res) {
        const { id } = req.params;
        const cliente = await Cliente.destroy({
            where: {
                id: id
            }
        });

        return res.json(cliente);
    },
    async update(req, res) {
        const { id, nome, endereco, cpf, telefone, email } = req.body;

        const cliente = await Cliente.update({
            nome, endereco, cpf, telefone, email
        }, {
            where: {
                id: id
            }
        });
        return res.json(cliente);
    },
}