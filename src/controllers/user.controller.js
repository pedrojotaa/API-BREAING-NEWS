const userService = require("../service/user.service");

const create = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;

  if (!name || !username || !email || !password || !avatar || !background) {
    res.status(400).send({ message: "Submit all fields to registration" });
  }

  const user = await userService.createService(req.body);

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

const findAll = async (req, res) => {
  const users = await userService.findAllService();

  if (!users) {
    return res.status(400).send({ message: "There are no register users" });
  }

  res.send(users);
};

module.exports = {
  create,
  findAll,
};
