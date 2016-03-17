var base = require('./base');
var _ = require('lodash');

var prod = {
    name: 'nodejs-book-inventory'
};

base.configurator(_.merge({}, base.settings, prod));

