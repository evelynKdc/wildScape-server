const Categorie = require("../model/Categorie");

const createCategorie = async(req, res) => {
  const { name, url } = req.body;
  const transformedName = name.toUpperCase();
  try {
    const categorie = new Categorie({ name: transformedName, url });
    await categorie.save();
    res.json({ categorie });
  } catch (error) {
    res.status(500).json({ mssg: "internal error to create a categorie" });
  }
};

const getCategories = async(req, res) => {
  const categories = await Categorie.find({status:true});
  try {
    res.json({ categories });
  } catch (error) {
    console.log(error);
    res.status(500).json({ mssg: "internal error to get categories" });
  }
};
module.exports = { createCategorie, getCategories };
