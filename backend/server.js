const express = require('express')
const app = express()
const cors = require('cors')
var mysql = require('mysql');
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); 

var clones
var droids
var troops
var battles

//endpoint for getting all troops
app.route('/troops').get((req, res) => {
  sql = "SELECT * FROM `troops`"
  con.query(sql, function (err, result) {
    if (err) throw err;
   troops =result;
  });
  res.send(troops)
})

app.route('/troops/droid').get((req, res) => {
  sql = "SELECT * FROM `troops` where `type` = 'droid army'"
  
  con.query(sql, function (err, result) {
    if (err) throw err;
  droids =result;
  });
  res.send(droids)
})

app.route('/troops/clone').get((req, res) => {
  sql = "SELECT * FROM `troops` where `type` = 'clone trooper'"
  
  con.query(sql, function (err, result) {
    if (err) throw err;
   clones =result;
  });
  res.send(clones)
})

//endpoint to get a specific troop
app.route('/troops/:kind').get((req, res) => {
  const search = req.params['kind'];
  sql = "SELECT * FROM `troops`"
  con.query(sql, function (err, result) {
    if (err) throw err;
   troops =result;
  });
  result = "no match"
  for(i=0;i<troops.length;i++)
  {
    if(search == troops[i].kind){
      result = troops[i]
    }
  }
  res.send(result)
  
})

//endpoint for adding a troop
app.route('/troops/add').post((req, res) => {
  var troop= req.body
  sql ="INSERT INTO `troops`(`kind`, `description`, `strength`, `agility`, `intelligence`, `terrain`, `type`) VALUES ('"+troop.kind+"','"+troop.description+"',"+troop.strength+","+troop.agility+","+troop.intelligence+",'"+troop.terrain+"','"+troop.type+"')"
  
    con.query(sql, function (err, result) {
      if (err) throw err;
    });
  res.status(200).send("success")
})

//endpoint for deleting a troop via id
app.route('/troops/:id').delete((req, res) => {
  const id = req.params['id'];
  sql ="DELETE FROM `troops` WHERE id="+id
    con.query(sql, function (err, result) {
      if (err) throw err;
    });
    res.sendStatus(204)
})

//endpoint for updating a troop
app.route('/troops/:id').put((req, res) => {
  const id = req.params['id'];
  var troop= req.body
  sql ="UPDATE `troops` SET `kind`='"+troop.kind+"',`description`='"+troop.description+"',`strength`="+troop.strength+",`agility`="+troop.agility+",`intelligence`="+troop.intelligence+",`terrain`='"+troop.terrain+"',`type`='"+troop.type+"' WHERE id =" + id
    con.query(sql, function (err, result) {
      if (err) throw err;
    });
    res.sendStatus(204)
})


app.route('/battles/add').post((req, res) => {
  var battle = req.body
  sql =`INSERT INTO battles(winner, summary) VALUES ("`+battle.winner+`","`+battle.summary+`")`
  
    con.query(sql, function (err, result) {
      if (err) throw err;
    });
  res.status(200).send("success")
})

app.route('/battles').get((req, res) => {
  sql = "SELECT * FROM `battles`"
  con.query(sql, function (err, result) {
    if (err) throw err;
   battles = result;
  });
  res.send(battles)
})


//database detaiils
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'GameOfClones'
});

//database connection
con.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
  
});

//allowing cors
var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 
}
app.use(cors(corsOptions))

//api base url
app.listen(8000, () => {
  console.log('Server started and listening on post 8000')
});
