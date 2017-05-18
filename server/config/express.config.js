
const logger = require('morgan');
// const busboyBodyParser = require('busboy-body-parser');
const path = require('path');
const bodyParser = require('body-parser');
const config = require('./config');

module.exports = function(app){
  var main = require('../routes/index');

  app.use(logger('dev'));

  app.use(function (req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

  // app.use(busboyBodyParser({ limit: '5mb' }));

  // Parsers for POST data
  app.use(bodyParser.json({limit: '10mb'}));

  app.use(bodyParser.urlencoded({limit: '10mb', extended: false }));

  app.use('/api', main.router);
  app.use('/api/auth', main.auth);
  app.use('/api/processor', main.processor);

  /**
   * Get port from environment and store in Express.
   */

  app.set('port', config.dev.port);

};
