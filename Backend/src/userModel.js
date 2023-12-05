const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Mongo_connect = async (app) => {
  try {
    const uri =
      "mongodb+srv://Puneeth:Lta02vWcfdBvLmq4@cluster0.cbqhspg.mongodb.net/";
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
