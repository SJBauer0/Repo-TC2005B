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


router.post('/newaction', (req, res, next) =>{
    console.log(req.body)
    console.log(req.body.newaction)
    res.send("New Action: " + req.body.newaction)
})

module.exports = router