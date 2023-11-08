const Activitie = require("../model/Activitie");

const createActivitie = async(req,res)=>{
    const {name, date, meeting, description, maximun,price,duration,requirements,asset,guia,categorie} = req.body;
    const activitie = new Activitie({name, date, meeting, description, maximun,price,duration,requirements,asset,guia,categorie});
    try {
        await activitie.save();
        res.status(201).json({activitie})
    } catch (error) {
        res.status(500).json({ mssg: "internal error to create an activitie" });
        console.log(error);
    }
}


const getActivitie = async(req, res) => {
    const activitie = await Activitie.find({status:true});
    try {
      res.json({ activitie });
    } catch (error) {
      console.log(error);
      res.status(500).json({ mssg: "internal error to get activities" });
    }
  };

  const getActivitieById = async(req, res) => {
    const {id} = req.params;
    const activitie = await Activitie.findById(id);
    try {
      res.json({ activitie });
    } catch (error) {
      console.log(error);
      res.status(500).json({ mssg: "internal error to get activities" });
    }
  };
  const getActivitieByCategorie = async(req, res) => {
    const {id} = req.params;
    const activitie = await Activitie.find({categorie: id});
    try {
      res.json({ activitie });
    } catch (error) {
      console.log(error);
      res.status(500).json({ mssg: "internal error to get activities" });
    }
  };
module.exports={
    createActivitie,getActivitie,getActivitieById,getActivitieByCategorie
}