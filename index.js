var express = require('express')
var app = express();

app.get('/records/:datewanted', function(req, resp) {
    var dateWanted = req.params.datewanted;
    try
    {
	resp.json({requested: dateWanted});
    }
    catch(exception)
    {
	resp.send(404);
    }
  }
);

app.listen(3001);
console.log("server listening on port 3001");
