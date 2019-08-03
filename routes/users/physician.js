const express = require("express");
const router = express.Router();
const Patient = require('../../models/Patient')

router.get("/", (req, res, next) => {
   Patient.find()
   .populate('hospital', {})
   .then(patient => {
     res.status(200).json(patient)
   })
   .catch(err => res.status(400).json(err));
});


module.exports = router;
