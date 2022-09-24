const mongoose = require('mongoose')
const DB = process.env.MONG_URI;
mongoose.connect(DB).then(() => {
    console.log('connection successful');
  }).catch((err) => console.log('no connection'));
