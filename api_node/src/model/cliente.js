const { Model, DataTypes } = require('sequelize')

class Cliente extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            endereco: DataTypes.STRING,
            data_nascimento: DataTypes.DATE,
        },{sequelize})
    }
}

module.exports = Cliente;