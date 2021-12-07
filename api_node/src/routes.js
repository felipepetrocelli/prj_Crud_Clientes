const express = require('express');
const ClienteController = require('./controller/ClienteController');

const routes = express.Router();

//ROTAS CLIENTES
routes.get('/api/clientes', ClienteController.index)
routes.get('/api/clientes/:id', ClienteController.findByid)
routes.post('/api/clientes', ClienteController.store)
routes.delete('/api/clientes/:id', ClienteController.delete)
routes.put('/api/clientes/:id', ClienteController.update)

module.exports = routes;