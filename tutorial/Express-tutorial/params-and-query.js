const express = require("express");
const app = express();
const datas = require("./data");

/*
Learning In This File :

* prams
* query
* filter based on query
* sending a json data 
* send - directly passing the string 
* sendFile - sending the data which is inside a file means basically sending a file for the renderation!!
* Every res.send should have a return as prefix in order to avoid the big fatal errors!!

*/

app.get("/", (req, res) => {
  res.send("Hello world!!");
});

app.get("/characters", (req, res) => {
  const Items = datas.Data.map((items) => {
    return `<h1>${items.names}</h1>`;
  });

  res.send(Items);
});

app.get("/api/naruto/:id", (req, res) => {
  const param = req.params;
  res.send(datas.Data.find((item) => item.id === Number(param.id)));
});

app.get("/apu/v1/query", (req, res) => {
  const { search } = req.query;

  let Sorted = "";

  if (search) {
    Sorted = datas.Data.filter((item) => {
      return item.names.startsWith(search);
    });
  } else Sorted = datas.Data;

  if (Sorted.length < 1)
    return res.status(200).json({ succes: true, data: [] });

  return res.status(200).send(Sorted);
});

app.listen(5000, () => {
  console.log("server is listening...");
});
