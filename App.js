const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
require('./mongoose')
const Person = require('./person')
const port = process.env.PORT || 3000


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post('/add', (req, res) => {
    const person = new Person(req.body)
    person.save().then(() => {
        res.status(201).send(user)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

app.get('/all', (req, res) => {
    Person.find({}).then((users) => {
        res.send(users)
    }).catch(() => {
        res.status(500).send()
    })
})

app.listen(port, () => {
    console.log("Server is up on port " + port)
})