const express = require('express');
const router  = express.Router();
const User = require("../models/User");
const Patient = require('../models/Patient');
const FamilyMember = require('../models/Family-Member');

router.get('/', (req, res, next) =>{
  res.json({msg: 'Home'});
});

const sessionValidation = (req, res, next) =>{
  //console.log("Dentro del middleware", req.session);
  if (req.session.currentUser) {
    next();
  } else {
    res.json({ msg: "Necesitas iniciar sesión para continuar" });
  } 
}
 
// const checkRoles = role => {
//   return function (req, res, next){
//     if(req.sessionValidation() && req.currentUser.role === role){
//       return next();
//     }else {
//       if(req.sessionValidation() && req.currentUser.role === 'USER'){
//         return next();
//       }
//       res.json({msg:'Exclusivo para usuarios'})
//     }
//       if (req.sessionValidation() && req.currentUser.role === "ADMIN") {
//       }
//   }
//}

router.get("/patient", sessionValidation, (req, res, next) => {
  const id = req.session.currentUser
  User.findById(id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => res.status(400).json(err));
  
});

router.post('/patient',  (req, res, next) => {
  const id = req.session.currentUser;
  const {
    firstname,
    lastname,
    date_of_birth,
    age,
    gender,
    movil_number,
    address1,
    address2,
    neighborhood,
    city,
    state,
    latitude,
    longitude,
    occupation
  } = req.body;
  User.updateOne({_id:id}, {$set:{ name :{firstname,lastname},
           date_of_birth,
           age,
           gender,
           movil_number,
           direction:{address1, 
            address2, 
            neighborhood, 
            city, state, 
            latitude, 
            longitude},
           occupation,}})
  .then(user => {
    res. status(200).json(user)
  })
  .catch(err => console.log(err))
});

router.post('/patient/help', (req, res, next) => {
  const id = req.session.currentUser;
  const {firstname, 
         lastname,
         pbIdx,
         status,
         age,
         gender,
         signs,
         latitude,
         longitude,
        } = req.body;
         const newPatient = new Patient(
           { name:{firstname,lastname},
           age,
           pbIdx,
           status,
           gender,
           signs,
           localization:{latitude, longitude},
           creator: id,
           }
         );
         newPatient.save()
         .then(patient => {
           res.status(200).json(patient)
         })
         .catch(err => console.log(err));
})



router.post("/patient/:id/family", (req, res, next) => {
  const id = req.session.currentUser;
  const {
    name,
    age,
    date_of_birth,
    gender,
    phone_number
  } = req.body;
  const newFamilyMember = new FamilyMember({
    name,
    date_of_birth,
    age,
    gender,
    phone_number,
    creator: id
  });
  newFamilyMember
    .save()
    .then(member => {
      res.status(200).json(member);
    })
    .catch(err => console.log(err));
});



router.get("/patient/:id/family", (req, res, next) => {
   const id = req.session.currentUser;
   FamilyMember.find({ creator: id })
    //  .populate("creator", { _id: 0 })
     .then(member => {
       res.status(200).json(member);
     })
     .catch(err => console.log(err));
});



  module.exports = router;
              
                                        
                                        
                                        