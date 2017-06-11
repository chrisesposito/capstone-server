var express = require('express')
var app = express();
var mysql = require('mysql');
var connection;


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

app.get('/records/:datewanted', function(req, resp) {
    var dateWanted = req.params.datewanted;
    try
    {
        var sqlCmd = 'SELECT geodata FROM UsageRecords WHERE dateString=' + connection.escape(dateWanted);
        console.log(sqlCmd);
        connection.query(sqlCmd, function (error, results, fields) {
            if (error) throw error;
            else
            {
                var jsonResult = JSON.parse(results[0].geodata);
                resp.json(jsonResult);
            }
        
        });
	//resp.json({requested: dateWanted});
    }
    catch(exception)
    {
	resp.sendStatus(404);
    }
  }
);
