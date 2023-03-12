const express = require('express')
const router = express.Router()

const goals = [
    {
        name : "Read more books",
        date : "01/02/2023",
        type : "URGENT",
        description : "Read 20 more books by the end of the year.",
        img : "https://bulma.io/images/placeholders/1280x960.png"
    },
    {
        name : "Do more Excercise",
        date : "21/01/2023",
        type : "URGENT",
        description : "Do excercise a 3 times a Week.",
        img : "https://bulma.io/images/placeholders/1280x960.png"
    },
    {
        name : "Code More!",
        date : "02/01/2023",
        type : "NORMAL",
        description : "Learn React, Express and Tailwind.",
        img : "https://bulma.io/images/placeholders/1280x960.png"
    }
]

router.get('/', (req, res, next) => {
    res.render('goals.ejs', {goals: goals})
})

module.exports = router