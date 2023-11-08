const Guia = require("../model/Guia");

const createGuia = async(req,res)=>{
    const {name, lastName,email, url} = req.body;
    const guia = new Guia({name, lastName,email,url});
    try {
        await guia.save();
        res.status(201).json({guia});
    } catch (error) {
        res.status(500).json({ mssg: "internal error to create a guia" });
        console.log(error);
    }
}

const getGuias = async(req,res)=>{
    const guias = await Guia.find({status:true});
    try {
        res.json({guias});
    } catch (error) {
        res.status(500).json({ mssg: "internal error to get guias" });
    }
}

module.exports={createGuia,getGuias}