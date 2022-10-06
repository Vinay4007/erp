const mongoose = require("mongoose");

const TDSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },

  subject: {
    type: String,
    required: true,
  },

  text: {
    type: String,
    required: true,
  },
});

const tds = mongoose.model("TDS", TDSchema);

module.exports = tds;
