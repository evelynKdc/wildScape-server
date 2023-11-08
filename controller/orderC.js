const Order = require("../model/Order");

const createOrder = async(req,res)=>{
    const {user, activitie, total, people} = req.body;
    const order = new Order({user, activitie, total, people});
    try {
        await order.save();
        res.status(201).json({order})
    } catch (error) {
        res.status(500).json({ mssg: "internal error to create an order" });
        console.log(error);
    }
}

const getOrderByUserId = async(req, res) => {
    const {id} = req.params;
    const order = await Order.find({user: id}).populate("activitie");
    try {
      res.json({ order });
    } catch (error) {
      console.log(error);
      res.status(500).json({ mssg: "internal error to get order by user" });
    }
  };

module.exports={createOrder,getOrderByUserId}