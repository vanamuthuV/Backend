const express = require("express");
const DateFixer = require("./DateFixers");
const Authorize = require("./authorize");
const app = express();

/*
Learnings :

* Studied About The midlleware which acts as a middle man between the request and the response
* Middleware is a kind of function which poses a lot of properties in it which the middleware function do have the access to the req and res basic server properties
* Apart from the req and the res we do have a special property called next.
* next uses : To understand the working of the next when a middleware is called then it must to passed to next middleware
  or it must be ended. when you don't end the middleware then when then middleware included app.get is invoked then the browser page will be simply spinning(loading...)
* Ending or next : 
    * Ending in the sense when we write a snippet as "res.send()" here we are completing our response to the server 
    * next means we are passing to the next middleware using the next function where the next function is capable of intaking the parameters
        Eg : next(loader) //Where loader is a middleware

* The main use of the next is if we take a middleware function as example then we have to execute a dialog in app.get therefore you should not 
  response as res.send() or any other res properties. Therefore you should use next() in order to say you are passing the middleware
  function in short you want to continue after the middleware

* The req property is like a storage like if you give req.user = 'SomeValue' then you can access these thing where you called the middleware using req.user

*/

app.use([DateFixer, Authorize]);

app.get("/", (req, res) => {
  return res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/contact", (req, res) => {
  res.send("Contact");
});
app.get("/blog", (req, res) => {
  res.send("Blog");
});
app.get("/purchase", (req, res) => {
  console.log(req.user);
  res.send("Purchase");
});

app.listen(5000, () => {
  console.log("server is listening...");
});
