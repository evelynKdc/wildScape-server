const { request } = require("express");
const bcryptjs = require("bcryptjs");
const User = require("../model/User");
const { generateJWT } = require("../helpers/jwtValidator");

const registerAuth = async (req = request, res) => {
  const { name, lastName, email, password, Dni } = req.body;
  const user = new User({ name, lastName, password, email, Dni }); //create the model with the data from the body request
  //encrypting password
  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password, salt);
  //saving in database
  try {
    await user.save();
    const token = await generateJWT(user._id);

    return res.json({
      ok: true,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, error });
  }
};

const loginAuth = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        ok: false,
        mssg: "This user is not in database",
      });
    }

    if (!user.status) {
      return res.status(400).json({
        ok: false,
        mssg: "This user is not active",
      });
    }

    //verifying password
    const passwordCompared = bcryptjs.compareSync(password, user.password);
    if (!passwordCompared) {
      return res.status(400).json({
        ok: false,
        mssg: "Password is incorrect",
      });
    }

    //generate token
    const token = await generateJWT(user._id);

    res.json({
      ok: true,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      error,
    });
  }
};

module.exports = {
  registerAuth,
  loginAuth,
};
