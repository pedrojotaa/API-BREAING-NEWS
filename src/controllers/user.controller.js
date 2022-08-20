const userService = require("../service/user.service");

const create = (req, res) => {
  const { name, username, email, password } = req.body;

  if (!name || !username || !email || !password) {
    res.status(400).send({ message: "Submit all fields to registration" });
  }

  const user = userService.create(req.body);

  if (!user) {
    return res.status(400).send({ message: "Erro creating user" });
  }

  res.status(201).send({
    message: "User create successfully",
    user: {
      id: user._id,
      name,
      username,
      email,
      avatar,
      background,
    },
  });
};

module.exports = {
  create,
};
