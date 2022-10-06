const mongoose = require('mongoose')
const DB1 = process.env.MONG_URI1;
mongoose.connect(DB1).then(() => {
    console.log('connection1 successful');
  }).catch((err) => console.log('no connection'));
