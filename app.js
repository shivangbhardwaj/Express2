const express = require('express')

const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/new.html');
})

app.get('/add/num1/num2', function (req, res) {
  var num1 = parseInt(req.query.num1)
  var num2 = parseInt(req.query.num2)
  var sum=num1+num2;
  res.send(sum.toString());
})

app.get('/subtract/num1/num2', function (req, res) {
  var num1 = parseInt(req.query.num1)
  var num2 = parseInt(req.query.num2)
  
  var sub=num1-num2;
  res.send(sub.toString());
})

app.get('/multiply/num1/num2', function (req, res) {
  var num1 = parseInt(req.query.num1)
  var num2 = parseInt(req.query.num2)
  var mul=num1*num2;
  res.send(mul.toString());

  
})

app.get('/divide/num1/num2', function (req, res) {
  var num1 = parseInt(req.query.num1)
  var num2 = parseInt(req.query.num2)
  var div=num1/num2;
  res.send(div.toString());

})

app.listen(3000, function () {
  console.log('Successfully started express application!')
})