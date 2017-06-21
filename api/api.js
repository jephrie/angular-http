const express = require('express')
const api = express()

api.get('/asyncDo', function (req, res) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  // Do some nonsense to simulate work.
  var str = '';
  for(var i=0; i < 300; i++) {
    for (var j=0; j < 3000; j++) {
      var chr = String.fromCharCode((i*j)%127);
      str += chr;
    }
  }
  console.log(str);

  res.send('end')
})

api.listen(3030, function () {
  console.log('Example app listening on port 3030!')
})
