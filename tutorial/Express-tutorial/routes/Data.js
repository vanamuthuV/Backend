const express = require('express')
const router = express.Router()
const {Data} = require('../data')

const Datas = (req, res) => {
  return res.status(200).json(Data);
};

router.route('/').get(Datas)

module.exports = router