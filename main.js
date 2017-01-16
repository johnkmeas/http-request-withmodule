var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
          console.log('Downloading image...');
          //console.log(response.statusMessage)
          console.log('Response code: ', response.statusCode, '\nResponse message: ', response.statusMessage, '\nResponse header: ', response.headers['content-type']);
       })
       .pipe(fs.createWriteStream('./future.jpg'))
       .on('finish', function(){
          console.log('Finished Downloading')
        });