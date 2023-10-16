const User = require("../model/User");

const getUserByToken = async (req, res) => {
  const id = req.user._id;
  try {
    const user = await User.findById(id);
    res.json({
      ok: true,
      user,
    });
  } catch (error) {
    res
      .status(500)
      .json({ ok: false, error: "Error al obtener el usuario", error });
  }
};

module.exports={
    getUserByToken
}
