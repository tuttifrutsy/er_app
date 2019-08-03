require("dotenv").config();

// Dependencies
const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
// const passport = require("passport");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const cors = require("cors");
// const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/User");
const bcrypt = require("bcrypt");


const saltRounds = 10;
// const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

// express instance
const app = express();

// routes

const physician = require("./routes/users/physician");
const medicalTeam = require("./routes/users/medical-team");



// mongoose

mongoose.Promise = Promise;
mongoose
  .connect(
    `mongodb+srv://Admin:${process.env.PWDB}@cluster0-zuf3q.mongodb.net/uber_er?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  )
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

  const corsOptions = {
    origin: "http://localhost:8080",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    credentials: true
  };

// Middleware Setup
app.options('*', cors(corsOptions))
app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: "usersErdb-secret",
    cookie: { maxAge: 60000 },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60 // 1 day
    })
  })
);

// app.use(passport.initialize());
// app.use(passport.session());

// passport.serializeUser((user, cb) => {
//   cb(null, user._id);
// });

// passport.deserializeUser((id, cb) => {
//   User.findById(id, (err, user) => {
//     if (err) {
//       return cb(err);
//     }
//     cb(null, user);
//   });
// });

// passport.use(
//   new LocalStrategy((username, password, next) => {
//     User.findOne({ username }, (err, user) => {
//       if (err) {
//         return next(err);
//       }
//       if (!user) {
//         return next(null, false, { message: "Incorrect username" });
//       }
//       if (!bcrypt.compareSync(password, user.password)) {
//         return next(null, false, { message: "Incorrect password" });
//       }

//       return next(null, user);
//     });
//   })
// );

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.clientID,
//       clientSecret: process.env.clientSecret,
//       callbackURL: "/auth/google/callback"
//     },
//     (accessToken, refreshToken, profile, done) => {
//       User.findOne({ googleID: profile.id })
//         .then(user => {
//           if (err) {
//             return done(err);
//           }
//           if (user) {
//             return done(null, user);
//           }

//           const newUser = new User({
//             googleID: profile.id
//           });

//           newUser.save().then(user => {
//             done(null, newUser);
//           });
//         })
//         .catch(error => {
//           next(error);
//         });
//     }
//   )
// );


// default value for title local
app.locals.title = "Er";

// main routes

const authRoutes = require("./routes/auth-routes");
app.use("/", authRoutes);

const router = require("./routes/index");
app.use("/", router);
app.use("/medicos", physician);
app.use("/medical-team", medicalTeam);



module.exports = app;
