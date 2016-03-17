var base = require('./base');
var _ = require('lodash');

var prod = {
    name: 'nodejs-book-inventory-test'
};

base.configurator(_.merge({}, base.settings, prod));