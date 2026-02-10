import express from 'express';
import fileRoutesConfig from './config/fileRoutes.cjs';
import routes from './routes.js';

const app = express();

app.use(express.json());
app.use(routes);
app.use(express.urlencoded({ extended: true }))
app.use('/product-file', fileRoutesConfig);
app.use('/category-file', fileRoutesConfig);




export default app;
