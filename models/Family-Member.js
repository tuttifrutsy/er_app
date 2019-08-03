const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const familyMemberSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  gender: String,
  phone_number: Number,
  date_of_birth: Date,
  creator: {type: Schema.Types.ObjectId, ref: 'User'}
  },{
    timestamps: true,
  });

  const FamilyMember = mongoose.model('Family-Member', familyMemberSchema);
  module.exports = FamilyMember;