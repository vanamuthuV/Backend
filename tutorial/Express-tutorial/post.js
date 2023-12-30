const express = require("express");
const app = express();

const naruto = require('./routes/naruto')
const login = require('./routes/login')
const Data = require('./routes/Data')

app.use(express.static("./public/post"));
app.use(express.urlencoded({ extended: false }));
app.use('/api/naruto', naruto)
app.use('/login', login)
app.use('/data', Data)

app.listen(5000, () => {
  console.log("server is listening...");
});
