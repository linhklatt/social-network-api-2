const { Thought, User } = require("../models");

module.exports = {
  // Get all thought
  getThoughts(req, res) {
    User.find()
      .populate({ path: "reaction", select: "-__v" })
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
};
