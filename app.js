var express = require('express');
var bodyParser = require('body-parser');

module.exports = function(stockRepository) {
    var app = express();
    var routes = require('./routes')(stockRepository);
    var middleware = require('./middleware');


    app.use(bodyParser.json());

    app.get('/admin', middleware.authorize, routes.sendHello);
    app.get('/', routes.sendHello);
    app.get('/stock', routes.getStock);
    app.get('/stock/:isbn', routes.getStockItem);
    app.post('/stock', routes.stockUp);

    app.use(middleware.clientError);
    app.use(middleware.serverError);

    return app;
};
