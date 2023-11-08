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

const userPut = async (req,res)=>{
  const {id} = req.params;
  const {password, __v, estatus, createdAt, ...rest} = req.body;

  try {
      
      const user = await User.findByIdAndUpdate(id, rest, {new: true})
      res.json({user})
  } catch (error) {
      console.log(error);
      res.status(500).json({mssg:"internal Error"})
  }
}

const userDelete = async(req,res)=>{
  const {id} = req.params;
  try {
      
      const user = await User.findByIdAndUpdate(id, {status: false}, {new: true})
      res.json({user})
  } catch (error) {
      console.log(error);
      res.status(500).json({mssg:"internal Error"})
  }
}
module.exports={
    getUserByToken,
    userPut,
    userDelete
}
