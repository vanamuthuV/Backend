const data = require('../data')

const AllNaruto = (req, res) => {
  res.status(200).json(data.Naruto);
};

const SingleCharacter = (req, res) => {
  const { id } = req.params;
  const Data = data.Naruto;

  const singleCharacter = Data.find((char) => char.id === Number(id));

  if (singleCharacter) {
    return res.status(200).json(singleCharacter);
  }

  return res.status(404).send("Resource Not Found!!");
}

const UpdateCharacter =(req, res) => {
  const { id } = req.params;

  const isPresent = data.Naruto.find((char) => char.id === Number(id));

  if (!isPresent) {
    return res.status(404).send("Resource Can't Be Fetched!!");
  }

  const singleCharacter = data.Naruto.map((char) => {
    if (char.id === Number(id)) {
      char.firstname = "Uchiha";
      return char;
    } else return char;
  });

  res.status(200).json(singleCharacter);
}

const DeleteCharacter = (req, res) => {
  const { id } = req.params;

  const isPresent = data.Naruto.find((char) => char.id === Number(id));

  if (!isPresent) {
    return res.status(404).send("Resource Can't Be Fetched!!");
  }

  const AfterFilter = data.Naruto.filter((char) => char.id !== Number(id));

  res.status(200).json(AfterFilter);
};

module.exports = {AllNaruto, SingleCharacter, UpdateCharacter, DeleteCharacter}