const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const projectschema= new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  topic: {
    type: Number,
    required: true,
  },
  numberstudents: {
    type: Number,
    required: true,
  },
  idea: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

projectschema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

const projectfeedt = mongoose.model("PROJECTDETAILS", projectschema);

module.exports = projectfeedt;
