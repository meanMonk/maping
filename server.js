/*loading all require modules*/
const express = require('express');
const path = require('path');
const http = require('http');
const config = require('./server/config/config.js');
// Defining an node app.
const app = express();

// Point static path to dist folder
app.use(express.static(path.join(__dirname, 'dist')));

<<<<<<< HEAD


=======
>>>>>>> 045b63c36738f786508e9e5dae6a1f173a7db155
//App Express configuration

require('./server/config/express.config')(app);

<<<<<<< HEAD

//pointing to the uploads folder
app.use('/assets', express.static('server/uploads'));

=======
>>>>>>> 045b63c36738f786508e9e5dae6a1f173a7db155
// Catch all other routes and return the index file
app.get('**', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//App Mongoose Configuration
require('./server/config/mongoose.config')(config);

//Creating the http server
const server = http.createServer(app);

// Listen on provided port, on all network interfaces.

server.listen(config.dev.port, function(){
  console.log('Application running on localhost:'+ config.dev.port);
});
