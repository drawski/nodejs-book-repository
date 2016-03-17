var heroin = require('heroin-js');
var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});

var base = {
    name: 'nodejs-book-inventory',
    region: 'eu',
    maintenance: false,
    stack: 'cedar-14',
    config_vars: {
        MONGOLAB_URI: process.env.MONGOLAB_URI
    },
    addons: {},
    collaborators: [
        'katarzyna.wlodarska@schibsted.pl',
        'damian.rawski@schibsted.pl',
        'marcin.juszkiewicz@schibsted.pl',
        'turczyns@gmail.com'],
    features: {
        'runtime-dyno-metadata': {enabled: false},
        'log-runtime-metrics': {enabled: false},
        'http-session-affinity': {enabled: false},
        'preboot': {enabled: false},
        'http-shard-header': {enabled: false},
        'http-end-to-end-continue': {enabled: false}
    },
    formation: [{process: 'web', quantity: 1, size: 'Free'}],
    log_drains: []
};

module.exports = {
    settings: base,
    configurator: configurator
};