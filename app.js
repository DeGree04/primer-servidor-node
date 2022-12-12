const express = require('express')

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World, era broma')
})

app.listen(3000)

/*function suma(a,b) {
    return a + b
}
let resultado = suma (3,5)*/