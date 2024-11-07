const express = require('express')
const app = express()
const fs = require("fs")
app.use(express.static('webapp'))

app.get('/', function (req, res) {
  res.send('Hello World')
})
// app.get('/employee', function (req, res) {
//    var contesnts = fs.readFileSync(__dirname + "/webapp/emp.json","utf-8")
//    res.send(contesnts)
//   })
  
app.listen(process.env.PORT ||3000)

console.log("server start at http://localhost:3000/");
