const express = require("express");
const router = express.Router();
const Patient = require("../../models/Patient");

router.get("/", (req, res, next) => {
  Patient.find()
  .then(patient => {
    res.status(200).json(patient);
  })
  .catch(err => console.log(err));
});




module.exports = router;