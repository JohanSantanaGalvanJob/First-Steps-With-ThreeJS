const db = require("../models");
const Test = db.api;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.fullName || !req.body.age || !req.body.email || !req.body.password) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
  }

const information = {
  fullName: req.body.fullName,
  age: req.body.age,
  email: req.body.email,
  password: req.body.password
}

Test.create(game).then(data => {
  res.send(data);
}).catch(err => {
  res.status(500).send({
    message: err.message || "Some error occurred while creating the Game"
  })
});
}


exports.findAll = (req, res) => {
    Test.findAll().then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving all Information"
      })
    })
  }


  exports.findOne = (req, res) => {
  }

  exports.update = (req, res) => {
  }

  exports.delete = (req, res) => {
  }