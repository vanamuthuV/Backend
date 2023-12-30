const DateFixer = (req, res, next) => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
    const day = new Date().getDate();
    const url = req.url
    console.log(`${day}-${month}-${year}`, url);
  next();
};

module.exports = DateFixer