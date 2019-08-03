const express = require("express");
const authRoutes = express.Router();
const passport = require("passport");
const ensureLogin = require("connect-ensure-login");
// User model
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;



// const authMiddleware = (req, res, next) => {
//   if (!req.isAuthenticated()) {
//     res.status(401).json({msg:"You are not authenticated"});
//   } else {
//     return next();
//   }
// };


// const checkRoles = role => {
//   return function(req, res, next) {
//     if (req.isAuthenticated() && req.user.role === role) {
//       return next();
//     } else {
//       if (req.isAuthenticated && req.user.role === "USER") {
//         return next();
//       }
//       // res.redirect("login");
//     }
//   };
// };

authRoutes.get("/signup", (req, res, next) => {
  res.json({msg:' Crea tu usario'});
});

authRoutes.post("/signup", (req, res, next) => {
  const  {firstname, lastname, email, password, movil_phone} = req.body;
 
  if (firstname === "" || password === "" || lastname === "" || movil_phone === "" || email === "") {
    return res.json({ msg: "Ingresa todos los campos" });
  }
  User.findOne({ email })
    .then(user => {
      if (user !== null) {
        return res.json({ msg: "The email already exists" });
      }
      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);

      const newUser = new User({
        name:{
          firstname,
          lastname
        },
        email,
        movil_phone,
        password: hashPass,
        role:'USER'
      });

      newUser.save(err => {
        if (err) {
         return res.json({ msg: "Something went wrong" });
        } 
        else{
          res.json({msg: 'Se ha creado un nuevo usuario'})
        }
      });
    })
    .catch(error => {
      next(error);
    });
});


authRoutes.get("/login", (req, res, next) => {
  res.json({msj:'Inicia sesión para continuar'});
});


authRoutes.post("/login", (req, res) => {
  //console.log("Dentroreq.body, req.session)
  const { password, email } = req.body;
  //console.log("Datos de login", password, email)
  if (email === "" || password === "") {
    res.json({ msg: "Completa los campos" });
  }
  User.findOne({ email }).then(user => {
    if (!user) {
      return res.json({ msg: "Usuario no registrado" });
    }
    if (bcrypt.compareSync(password, user.password)) {
      req.session.currentUser = user;
      console.log("sesion", req.session, user)
      return res.json({ msg: "Se ha iniciado sesión" });
      
    } else {
      return res.json({ msg: "Verifica tu contraseña" });
    }
  });
});


// authRoutes.post('/login', (req, res, next) => {
//   passport.authenticate('local', (err, user, info) =>{
//     if (err){
//       return next(err);
//     }
//     if(!user){
//       return res.status(400).send([user, 'cannot login info', info]);
//     }
//     req.login(user, err =>{
//       res.json({msg:'Logged in'});
//     });
//   })(req, res, next);
// });

// authRoutes.get("/patient", authMiddleware, (req, res, next) => {
//   const id = req.session.passport.user
//   User.findById(id)
//   .then(user =>{ 
//     res.status(200).json(user)
//   })
//  .catch(err =>res.status(400).json(err));
  
// });


authRoutes.get("/logout", (req, res) => {
   req.session.destroy();
   res.json({ msg: "logout succes" });
 });

module.exports = authRoutes;
