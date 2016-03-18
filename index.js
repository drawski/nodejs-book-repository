var stockRepository = require('./stockRepository');
var app = require('./app')(stockRepository);

app.listen(process.env.PORT || 3100, function () {
    console.log('Example app listening on port 3100!');
});
