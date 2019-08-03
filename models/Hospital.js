const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hospitalSchema = new Schema(
  {
    name: {type: String, required: true},
    description: { type: String },
    profileImage: String,
    phone_number: Number,
      emergencyType: {
      type: String,
      enum: ["LEVEL1", "LEVEL2", "LEVEL3"]
    },
    direction:{
      address: String,
      neighborhood: String,
      city: String,
      latitude: Number,
      longitude: Number,
      zipcode: Number,
    },
    website: String,
  },
  {
    timestamps: true
  }
);


const Hospital = mongoose.model("Hospital", hospitalSchema);
module.exports = Hospital;