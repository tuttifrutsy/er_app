const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
 name: { 
      firstname: String,
      lastname: String,
    },
  date_of_birth: Date,
  age: Number,
  gender: String,
  profileImage: { type: String, default: "images/default-avatar.png" },
  movil_number: Number,
  phone_number: Number,
  password: {type: String, required: true},
  email: String,
  occupation: String,
  hospital: String,
  area: String,
  departament: String, 
  direction: {
    address1: String, //Calle
    address2: String, // Interior
    neighborhood: String,
    city: String,
    state: String,
    latitude: Number,
    longitude: Number
  },
  insurance_certificate: Number,
  oauthID: String, 
  facebookID: String,
  googleID: String, 
  profileID: String,          
  role:{
    type: String,
    enum:['USER','ADMIN', 'PHYSICIAN', 'TEAM', 'PRINCIPAL'],
  },
},{
  timestamps: true
})

const User = mongoose.model('User', userSchema);
module.exports = User;

