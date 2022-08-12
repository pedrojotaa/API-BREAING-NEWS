const create = (req, res) => {
  const { name, user, email, password } = req.body;

  if (!name || !user || !email || !password) {
    res.status(400).send({ message: "Submit all fields to registration" });
  }

  res.status(201).send({
    message: "User create successfully",
    user: {
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
