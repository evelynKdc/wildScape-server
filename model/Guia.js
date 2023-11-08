const { Schema, model } = require("mongoose");

const guiaSchema = Schema({
  name: {
    type: String,
    required: [true, "El nombre es requerido"],
    min:2
  },
  lastName: {
    type: String,
    required: [true, "El apellido es requerido"],
    min: 4,
  },
  email: {
    type: String,
    required: [true, "El correo es requerido"],
    unique: true,
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



module.exports = model("Guia", guiaSchema);
