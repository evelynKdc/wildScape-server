const { Schema, model } = require("mongoose");

const activitieSchema = Schema({
  name: {
    type: String,
    required: [true, "El nombre es requerido"],
    min:2
  },
  date: {
    type: Date,
    required: [true, "La fecha es requerido"],
  },
  meeting: {
    type: String,
    required: [true, "El lugar de encuentro  es requerido"],
  },
  description: {
    type: String,
    required: [true, "La descrpcion es requerido"],
  }, 
  maximun: {
    type: Number,
    required: [true, "el maximo de personas es requerido"],
  },
  price: {
    type: Number,
    required: [true, "el precio es requerido"],
  },
  duration: {
    type: String,
    required: [true, "La duracion de la actividad es requerido"],
  },
  requirements: {
    type: Array,
    required: [true, "Los requisitos son requeridos"],
  },
  asset: {
    type: Array,
    required: [true, "Los recursos multimedia son requeridos"],
  },
  guia: {
    type: Schema.Types.ObjectId,
    ref: "Guia",
    required: true,
  },
  categorie: {
    type: Schema.Types.ObjectId,
    ref: "Categorie",
    required: true,
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



module.exports = model("Activitie", activitieSchema);
