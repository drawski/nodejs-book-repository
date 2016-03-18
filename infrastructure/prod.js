var base = require('./base');
var _ = require('lodash');

var prod = {
    name: 'nodejs-book-inventory',
    log_drains: [
        'syslog://data.logentries.com:13636'
    ]
};

base.configurator(_.merge({}, base.settings, prod));

