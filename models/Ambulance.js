const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ambulanceSchema = new Schema(
  {
    description: { type: String, required: true },
    numeroEcinomico: { type: Number, required: true },
    placas: { type: String, required: true },
    profileImage: String,
    movil_number: Number,
    company: String,
    ambulanceType: {
      type: String,
      enum: ["LEVEL1", "LEVEL2", "LEVEL3"]
    },
    operator: { type: Schema.Types.ObjectId, ref: "User" },
    operator2: { type: Schema.Types.ObjectId, ref: "User" },
    location:{
      latitude: Number,
      longitude: Number,
    }
  },
  {
    timestamps: true
  }
);

const Ambulance = mongoose.model("Team", ambulanceSchema);

module.exports = Ambulance;