module.exports = function(stockRepository) {

    return {

        sendHello: function (req, res, next) {
            res.send('Hello World!');
        },

        getStock: function(req, res, next) {
            stockRepository
                .findAll()
                .then(function (result) {
                    res.json(result);
                })
                .catch(next);
        },

        getStockItem: function(req, res, next) {
            var isbn = req.params.isbn;
            stockRepository
                .getBook(isbn)
                .then(function(result) {
                    if (!result) {
                        res.status(404);
                        next();
                    }
                    res.json(result);
                }).catch(next);
        },

        getBookAvailability: function(req, res, next) {
            var isbn = req.params.isbn;
            stockRepository
                .getBook(isbn)
                .then(function(result) {
                    if (!result) {
                        res.status(404);
                        next();
                    }
                    res.format({
                        html: function() {
                            res.send('<div class="copiesLeft">' + result.count + '</div>');
                        },
                        json: function() {
                            res.status(200).json(result.count);
                        }
                    });
                }).catch(next);
        },

        stockUp: function(req, res, next) {
            var isbn = req.body.isbn;
            var count = req.body.count;
            stockRepository
                .stockUp(isbn, count)
                .then(function(result) {
                    res.json(result);
                })
                .catch(next);
        }
    };
};
