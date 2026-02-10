import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        price: Sequelize.INTEGER,
<<<<<<< HEAD
        path: Sequelize.STRING,
        offer: Sequelize.BOOLEAN,
=======
        category: Sequelize.STRING,
        path: Sequelize.STRING,
>>>>>>> f7d6b1d2207b5a6809c62817b3c4df29f175d479
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
<<<<<<< HEAD

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Category, {
      foreignKey: 'category_id',
      as: 'category',
    })
  }
  
=======
  }
>>>>>>> f7d6b1d2207b5a6809c62817b3c4df29f175d479
}

export default Product;
