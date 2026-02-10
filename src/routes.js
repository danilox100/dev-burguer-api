import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer.cjs';

import CategoryController from './app/controllers/CategoryController.js';
import ProductController from './app/controllers/ProductController.js';
import SessionController from './app/controllers/SessionController.js';
import UserController from './app/controllers/UserController.js';

import authMiddleware from './middlewares/auth.js';
import adminMiddleware from './middlewares/admin.js';

const routes = new Router();
const upload = multer(multerConfig);

// Rotas públicas
routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

// Middleware de autenticação
routes.use(authMiddleware);

// Products
routes.post(
  '/products',
  adminMiddleware,
  upload.single('file'),
  ProductController.store
);

routes.put(
  '/products/:id',
  adminMiddleware,
  upload.single('file'),
  ProductController.update
);

routes.get('/products', ProductController.index);

// Categories
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

export default routes;