const express = require('express')
const data = require("../data");
const router = express.Router()
const myroutes = require('../controller/naruto')

// router.get("/", myroutes.AllNaruto);

// router.get("/:id", myroutes.SingleCharacter);

// router.put("/change/:id", myroutes.UpdateCharacter);

// router.delete("/delete/:id", myroutes.DeleteCharacter);

router.route('/').get(myroutes.AllNaruto)
router.route('/:id').get(myroutes.SingleCharacter).put(myroutes.UpdateCharacter).delete(myroutes.DeleteCharacter)

module.exports = router