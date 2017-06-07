var express = require('express')
var app = express();
var mysql = require('mysql');
var connection;


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


connection = mysql.createConnection(
                {
                    host: 'localhost',
                    database: 'testData',
                    user: 'root',
                    password: 'Arisb@d1mss1'

                }
        );
        connection.connect(function (err)
        {
            if (err)
            {
                console.error('error connection to DB: ' + err.stack);
                return;
            }
            console.log('connected to db as as id ' + connection.threadId);
        }
        );
app.listen(3001);
console.log("server listening on port 3001");

