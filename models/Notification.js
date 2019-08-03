const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notificationSchema = new Schema(
  {
    patient: { type: Schema.Types.ObjectId, ref: "Patient" },
    creator: { type: Schema.Types.ObjectId, ref: "User" },
    ambulance: { type: Schema.Types.ObjectId, ref: "Ambulance" },
    hospital: { type: Schema.Types.ObjectId, ref: "Hospital" }
  },
  {
    timestamps: true
  }
  );
  
const Notification = mongoose.model("Notification", notificationSchema);
module.exports = Notification;