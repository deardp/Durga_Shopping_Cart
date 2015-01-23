'use strict';

var kraken = require('kraken-js'),
   db = require('./lib/database'),
     app = {};


 app.configure = function configure(nconf, next) {
     // Fired when an app configures itself
    //Configure the database
    db.config(nconf.get('databaseConfig'));
     next(null);
 };