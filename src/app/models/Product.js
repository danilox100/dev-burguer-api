import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        price: Sequelize.INTEGER,
        path: Sequelize.STRING, // Removida a duplicata que existia aqui
        offer: Sequelize.BOOLEAN,
        // REMOVIDO: category: Sequelize.STRING, <--- O ERRO ESTAVA AQUI
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:3001/product-file/${this.path}`;
          },
        },
      },
      {
        sequelize,
        tableName: 'products',
      },
    );

    return this;
  }

  static associate(models) {
    // Agora o 'as: category' não vai mais conflitar com o campo acima
    this.belongsTo(models.Category, {
      foreignKey: 'category_id',
      as: 'category',
    });
  }
}

export default Product;