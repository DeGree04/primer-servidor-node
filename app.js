const express = require('express')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World, era broma')
})

app.post('/imagen', upload.single('imagen'), function (req, res) {
    
    const body = req.body
    const imagen = req.file

    console.log(imagen)

    res.send ('Hello World, esto es publicar imagen')
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
  })

app.listen(3000)