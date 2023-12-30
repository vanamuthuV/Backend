const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('./public'))

// app.get('/', (req, res) => {
//     res.status(200).sendFile(path.resolve(__dirname, 'public/home/home.html'))
// })

app.get('/about', (req, res) => {
    res.status(200).sendFile(path.resolve (__dirname, 'public/about/about.html'))
})

app.all('*', (req, res) => [
    res.status(404).send('resource not found!!')
])

app.listen(5000, () => {
    console.log('server is listening...')
})