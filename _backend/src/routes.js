const express = require('express');

const sessionController = require('./controllers/SessionController');
const dashboardController = require('./controllers/DashboardController');

const routes = express.Router();

routes.post('/sessions', sessionController.store);
routes.get('/dashboard', dashboardController.show);
module.exports = routes;