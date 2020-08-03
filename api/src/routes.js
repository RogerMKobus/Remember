import { Router } from 'express';

const routes = new Router();

routes.get('/', function(req, res) {
    res.send('Hello Word')
})

export default routes;