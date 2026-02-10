import { Router } from 'express';
<<<<<<< HEAD
import multer from 'multer';
import CategoryController from './app/controllers/CategoryController.js';
import ProductController from './app/controllers/ProductController.js';
import SessionController from './app/controllers/SessionController.js';
import UserController from './app/controllers/UserController.js';
import multerConfig from './config/multer.cjs';
import adminMiddleware from './middlewares/admin.js';
import authMiddleware from './middlewares/auth.js';
=======
import UserController from './app/controllers/UserController.js';
import SessionController from './app/controllers/SessionController.js';
import ProductController from './app/controllers/ProductController.js';
import multer from 'multer';
import multerConfig from './config/multer.cjs';
>>>>>>> f7d6b1d2207b5a6809c62817b3c4df29f175d479

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);
<<<<<<< HEAD

routes.use(authMiddleware);
routes.post(
  '/products',
  adminMiddleware,
  upload.single('file'),
  ProductController.store,
);
routes.put(
  '/products/:id',
  adminMiddleware,
  upload.single('file'),
  ProductController.update,
);
routes.get('/products', ProductController.index);

routes.post(
  '/categories',
  adminMiddleware,
  upload.single('file'),
  CategoryController.store
);
routes.put(
  '/categories/:id',
  adminMiddleware,
  upload.single('file'),
  CategoryController.update
);
routes.get('/categories', CategoryController.index);

=======
routes.post('/products', upload.single('file'), ProductController.store);

routes.get('/products', ProductController.index);

>>>>>>> f7d6b1d2207b5a6809c62817b3c4df29f175d479
export default routes;
