exports.create = (req, res) => {
  res.send({ message: "create handler" });
};

exports.findOne = (req, res) => {
  res.send({ message: "findOne handler" });
};

exports.findAll = (req, res) => {
  res.send({ message: "findAll handler" });
};

exports.update = (req, res) => {
  res.send({ message: "updateOne handler" });
};

exports.delete = (req, res) => {
  res.send({ message: "deleteOne handler" });
};

exports.deleteAll = (req, res) => {
  res.send({ message: "deleteAll handler" });
};


exports.findAllFavorite = (req, res) => {
  res.send({ message: "findAllFavorite handler" });
};