<<<<<<< HEAD
import { Sequelize } from 'sequelize';
import Category from '../app/models/Category.js';
import Product from '../app/models/Product.js';
import User from '../app/models/User.js';
import databaseConfig from '../config/database.cjs';

const models = [User, Product, Category];
=======
import Sequelize from 'sequelize';
import User from '../app/models/User.js';
import databaseConfig from '../config/database.cjs';
import Product from '../app/models/Product.js';

const models = [User, Product];
>>>>>>> f7d6b1d2207b5a6809c62817b3c4df29f175d479

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

<<<<<<< HEAD
    models.map((model) => model.init(this.connection))
    .map(
      (model) => model.associate && model.associate(this.connection.models),);
=======
    models.map((model) => model.init(this.connection));
>>>>>>> f7d6b1d2207b5a6809c62817b3c4df29f175d479
  }
}

export default new Database();
