const express = require("express");
const {pool, poolanimes} = require("./db");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("So, Hello there...");
});

app.get("/characters", async (req, res) => {
  try {
    const ExistingData = await pool.query("SELECT * FROM characters");
    res.json(ExistingData.rows);
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/characters/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const Datas = await pool.query(`SELECT * FROM characters WHERE id = ${id}`);
    res.json(Datas.rows);
  } catch (error) {
    console.error(error.message);
  }
});

app.post("/characters", async (req, res) => {
  try {
    const { firstname, lastname } = req.body;
    const newCharacter = await pool.query(
      "INSERT INTO characters values ($1, $2) RETURNING *",
      [firstname, lastname]
    );
    res.json(newCharacter);
  } catch (err) {
    console.error(err.message);
  }
});

app.put("/characters/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const { firstname } = req.body;
    await pool.query("UPDATE characters SET firstname = $1 WHERE id = $2", [
      firstname,
      id,
    ]);
    res.json("Updation Success!!");
  } catch (error) {
    console.error(error.message);
  }
});

app.delete("/characters/:id", async (req, res) => {
  try {
      const { id } = req.params;
      await pool.query("DELETE FROM characters WHERE id = $1", [id])
      res.send("Deletion Successfull!!")
  } catch (error) {
    console.error(error);
  }
});

app.get('/animes', async (req, res) => {
  const AllAnimes = await poolanimes.query('SELECT * FROM animes')
  res.json(AllAnimes.rows)
})

app.get('/animes/:id', async (req, res) => {
  const { id } = req.params
  const SingleData = await poolanimes.query('SELECT * from animes WHERE id = $1', [id])
  res.json(SingleData.rows)
})

app.post('/animes', async (req, res) => {
  const { anime_name, anime_release, anime_language, anime_rating } = req.body
  await poolanimes.query("INSERT INTO animes values ($1, $2, $3, $4)", [anime_name, anime_release, anime_language, anime_rating])
  res.send('Updation successfull!!')
})

app.get('/anime/filter', async (req, res) => {
  try {
    const { starts } = req.body
    console.log(starts)
    const str = starts + "%";
    console.log(str)
    const MatchedResults = await poolanimes.query('select * from animes where anime_name similar to $1', [str])
    res.json(MatchedResults.rows)
  } catch (error) {
    console.error(error)
  }
})

app.get('/anime/filter/ratings', async (req, res) => {
  try {
    const filteredData = await poolanimes.query('select * from animes where anime_rating > 2 and anime_rating < 5')
    res.json(filteredData.rows)
  } catch (error) {
    console.error(error)
  }
})

app.listen(5000, console.log("server is listening..."));