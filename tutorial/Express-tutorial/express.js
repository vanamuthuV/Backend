const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.status(200).send('This Is Home Page!!')
})

app.get('/about', (req,res) => {
    res.status(200).send('This Is About page')
})

app.all('*', (req, res) => {
    res.status(404).send('Wrong Gate Way!!')
})

app.listen(5000, () => {console.log("server is listening...")})