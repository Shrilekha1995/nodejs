var app = require('./app')
var con = require('./connection')
app.listen(3000);

/**for connecting databse*/



app.get('/', function (req, res) {
    res.send("welcome to rest api");
});

con.connect(function (err) {

    /** to retrieve employee details */
    app.get('/employees', function (req, res) {
        con.query('select * from employee', function (err, result) {
            if (err)
                throw error;
            res.json(result);
        });

        /**delete employee by Id */
        app.delete('/deleteEmp/:id', function (req, res) {
            con.query('delete from employee where `id`=?', [req.params.id], () => {
                res.send("deleted successfully");
            });
        });

        /**add employee */
        app.post('/addEmp', function (req, res) {
            con.query('insert into employee values(?,?)', [req.body.id, req.body.name], () => {
                res.send("inserted successfully with id : " + req.body.id);
            });
        });

        /**update employee */
        app.put('/updateEmp', function (req, res) {
            con.query('update employee SET `name`=? where `id`=?', [req.body.name, req.body.id], () => {
                res.send("successfully updated");
            });
        });


    });
});
/*con.connect(function(err){
    if(err)
    throw err;

    console.log("connected");
 // var sql="Create table employee(id INT,name VARCHAR(255))";
   var sql="insert into employee values(2,'xyz')";
  //var sql="update users SET name='pqr' where id=1";
   // var sql="select * from users";
  //var sql="delete from users where id=1";


      con.query(sql,function(err,result){
        if(err)
        throw err;

        console.log(result.affectedRows);


});
    
    });*/
