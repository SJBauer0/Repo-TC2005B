const express = require("express")

const router = express.Router()

router.get('/newaction', (req, res, next) =>{
    let html = 
    `
        <form action="/todolist/newaction" method="POST">
            <label for="newaction">Action: </label>
            <input type="text" id="newaction" name="newaction">
            <input type="submit" value="Send">
        </form>
    `
    res.send(html)
})

router.get('/newgoal', (req, res, next) =>{
    let html2 = 
    `
        <form action="/todolist/newgoal" method="POST">
            <label for="newgoal">Goal: </label>
            <input type="text" id="newgoal" name="newgoal">
            <input type="submit" value="Send">
        </form>
    `
    res.send(html2)
})

router.post('/newaction', (req, res, next) =>{
    console.log(req.body)
    console.log(req.body.newaction)
    res.send("New Action: " + req.body.newaction)
})

router.post('/newgoal', (req, res, next) =>{
    console.log(req.body)
    console.log(req.body.newgoal)
    res.send("New Goal: " + req.body.newgoal)
})

module.exports = router