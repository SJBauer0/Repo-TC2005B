const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({extended: false}))

app.set('view engine', 'ejs')
app.set('views', 'views')

//middleware
app.use((req, res, next) => {
    console.log('Middleware!')
    next()
})

const routesActions = require('./routes/newactions.routes')

app.use('/todolist', routesActions)

const routesGoals = require('./routes/newgoals.routes')

app.use('/todolist', routesGoals)

const routesListGoals = require('./routes/actions.routes')

app.use('/todolist', routesListGoals)

app.use((req, res) => {
    console.log('Error!')
    res.status(404)
    res.send('Lo sentimos esta ruta no existe')
})

app.listen(3000)