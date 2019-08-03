const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema(
  {
    name: {
      firstname: String,
      lastname: String
    },
    status:{ type: String, enum: ['Responde', 'No responde', 'Desconoce']},
    pbIdx:{ type: String, enum:['PARO', 'SICA', 'ICTUS', 'TRAUMA', 'PARTO']},
    age: { type: String, enum:['Lactante', 'Escolar', 'Adulto']},
    gender: String,
    signs: [String],
    localization:{
      latitude: Number,
      longitude: Number,
    },
    creator: { type: Schema.Types.ObjectId, ref: 'User' },
    ambulance: { type: Schema.Types.ObjectId, ref: "Team" },
    hospital: { type: Schema.Types.ObjectId, ref: "Hospital" }
  },
  {
    timestamps: true
  }
);

const Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;
