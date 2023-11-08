const { Schema, model } = require("mongoose");

const categorieSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  activitie: {
    type: Schema.Types.ObjectId,
    ref: "Activitie",
    required: true,
  },
  total: {
    type: Number,
    required: [true, "El total es requerido"],
  }, 
  people: {
    type: Number,
    required: [true, "La cantidad de personas es requerido"],
  }, 
  status: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = model("Order", categorieSchema);
