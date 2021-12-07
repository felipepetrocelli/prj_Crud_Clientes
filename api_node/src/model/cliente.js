const { Model, DataTypes } = require('sequelize')

class Cliente extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            endereco: DataTypes.STRING,
            data_nascimento: DataTypes.STRING,
        },{sequelize})
    }
}

module.exports = Cliente;