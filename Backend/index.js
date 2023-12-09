const express = require("express");
const cors = require("cors");
const router = require("./src/Router/Route");
const {
  User,
  Mongo_connect,
  findUserByUsername,
  findUserById,
} = require("./src/userModel");
const app = express();

const corsOptions = {
  origin: "*",
  credentials: true,
};

app.use(cors(corsOptions));

const mongo = async () => {
  await Mongo_connect(app);
};
mongo();

app.use(express.json());
app.use("/api/v1/", router);
// ################################################
// passport.js
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");

app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "punu773",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(function (username, password, done) {
    const user = findUserByUsername(username);

    if (!user) {
      return done(null, false, { message: "Incorrect username." });
    }

    if (user.password !== password) {
      return done(null, false, { message: "Incorrect password." });
    }

    return done(null, user);
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  const user = findUserById(id);
  done(null, user);
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
    failureFlash: true, // Optional, to show flash messages
  })
);

app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

app.get("/dashboard", isLoggedIn, function (req, res) {
  res.send("Welcome to your dashboard!");
});

// ################################################

app.listen(3500, () => {
  console.log("Server listening to port 3500, ENJOY");
});
