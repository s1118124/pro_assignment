var express = require('express');
var app = express();

app.use('/2016',express.static('photos.2016')); //for static file/multimedia file
app.use('/2017',express.static('photos.2017'));

var server = app.listen(process.env.PORT || 8099, function () {
  var port = server.address().port;
  console.log('Server listening at port %s', port);
});
