const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("dotenv").config();

const Mongo_connect = async (app) => {
  try {
<<<<<<< HEAD
    const uri = process.env.MONGO_URI;
=======
    const uri =
      "####################################";
>>>>>>> 97039a310ac627b16b7edf0d5d22b8a105e7b0c1
    await mongoose.connect(uri);
    console.log("Connected to MongoDB...");
  } catch (error) {
    console.error("Connection error:", error);
  }
};

const userSchema = new Schema({
  username: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

function findUserByUsername(username) {
  return User.findOne({ username: username });
}

function findUserById(id) {
  return User.findById(id);
}

module.exports = {
  User,
  Mongo_connect,
  findUserByUsername,
  findUserById,
};
