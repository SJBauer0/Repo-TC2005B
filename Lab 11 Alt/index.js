const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

app.use((req, res, next) => {
    console.log('Middleware!')
    next()
})

const rutas = require('./routes/list.routes')

app.use('/todolist', rutas)

app.use((req, res) => {
    console.log('Error!')
    res.status(404)
    res.send('Lo sentimos esta ruta no existe')
})

app.listen(3000)