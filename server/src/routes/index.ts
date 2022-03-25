import express from 'express';
import login from './login';

const routes = express.Router();

routes.use('/login', login);

export default routes;
