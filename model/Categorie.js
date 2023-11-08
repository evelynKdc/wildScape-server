const { Schema, model } = require("mongoose");

const categorieSchema = Schema({
  name: {
    type: String,
    required: [true, "El nombre es requerido"],
    min:2
  },
  url: {
    type: String,
    required: [true, "El url es requerido"],
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



module.exports = model("Categorie", categorieSchema);
