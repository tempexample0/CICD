const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

const routes = require('./api/routes');
routes(app);

app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, function() {
   console.log('Server started on port: ' + port);
});