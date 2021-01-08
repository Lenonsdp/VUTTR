import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ToolsController from './app/controllers/ToolsController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/tools', ToolsController.store);
routes.get('/tools', ToolsController.index);
routes.get('/tools/:tag', ToolsController.show);
routes.delete('/tools/:id', ToolsController.delete);

module.exports = routes;
