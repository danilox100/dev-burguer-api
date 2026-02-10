import * as Yup from 'yup';
<<<<<<< HEAD
import Category from '../models/Category.js';
=======
>>>>>>> f7d6b1d2207b5a6809c62817b3c4df29f175d479
import Product from '../models/Product.js';

class ProductController {
  async store(req, res) {
    const schema = Yup.object({
      name: Yup.string().required(),
      price: Yup.number().required(),
<<<<<<< HEAD
      category_id: Yup.number().required(),
      offer: Yup.boolean(),
=======
      category: Yup.string().required(),
>>>>>>> f7d6b1d2207b5a6809c62817b3c4df29f175d479
    });

    try {
      schema.validateSync(req.body, { abortEarly: false });
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }

<<<<<<< HEAD
    const { name, price, category_id, offer } = req.body;
=======
    const { name, price, category } = req.body;
>>>>>>> f7d6b1d2207b5a6809c62817b3c4df29f175d479
    const { filename } = req.file;

    const newProduct = await Product.create({
      name,
      price,
<<<<<<< HEAD
      category_id,
      path: filename,
      offer,
=======
      category,
      path: filename,
>>>>>>> f7d6b1d2207b5a6809c62817b3c4df29f175d479
    });

    return res.status(201).json(newProduct);
  }

<<<<<<< HEAD
   async update(req, res) {
    const schema = Yup.object({
      name: Yup.string(),
      price: Yup.number(),
      category_id: Yup.number(),
      offer: Yup.boolean(),
    });

    try {
      schema.validateSync(req.body, { abortEarly: false });
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }

    const { name, price, category_id, offer } = req.body;
    const { id } = req.params

    let path
    if(req.file){
    const { filename } = req.file;
    path = filename;
    }
    

   await Product.update({
      name,
      price,
      category_id,
      path,
      offer,
    }, {
      where: {
        id
      }
    });

    return res.status(200).json();
  }

  async index(_req, res) {
    const products = await Product.findAll({
      include: {
        model: Category,
        as: 'category',
        attributes: ['id', 'name'],
      },
    });
=======
  async index(req, res) {
    const products = await Product.findAll();
>>>>>>> f7d6b1d2207b5a6809c62817b3c4df29f175d479

    return res.status(200).json(products);
  }
}

export default new ProductController();
