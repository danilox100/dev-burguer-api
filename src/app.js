import express from 'express';
<<<<<<< HEAD
import fileRoutesConfig from './config/fileRoutes.cjs';
import routes from './routes.js';
=======
import routes from './routes.js';
import fileRoutesConfig from './config/fileRoutes.cjs';
>>>>>>> f7d6b1d2207b5a6809c62817b3c4df29f175d479

const app = express();

app.use(express.json());
<<<<<<< HEAD
app.use(express.urlencoded({ extended: true }))
app.use('/product-file', fileRoutesConfig);
app.use('/category-file', fileRoutesConfig);

app.use(routes);
=======
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use('/product-file', fileRoutesConfig);
>>>>>>> f7d6b1d2207b5a6809c62817b3c4df29f175d479

export default app;
