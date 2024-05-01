const getHomePage = (req, res) => {
  res.send("Hello World and My Name Is HTisMe with nodemon");
};
const getABC = (req, res) => {
  res.render("sample");
};
module.exports = {
  getHomePage,
  getABC,
};
