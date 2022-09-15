//require('dotenv').config()
const dotenv = require("dotenv");
const express = require("express")
const mongoose = require('mongoose')
const app = express()
dotenv.config({path:'./.env'});
require('./db/connec');

const User = require('./models/userSchema')
const loandata = require('./models/loanSchema');
const feedt = require('./models/feeSchema');
const hosfeedt = require('./models/hosfeeSchema');
const tutionfeedt = require('./models/tutionSchema');
const advdata = require('./models/advSchema');
//const tutionRoutes = require('./routes/tution')
// let alert = require('alert');
// middleware

app.use(express.json());

app.use(require('./routes/auth'));
app.use(require('./routes/loandb'));
app.use(require('./routes/feedb'));
app.use(require('./routes/hosfeedb'));
app.use(require('./routes/tutionfeedb'));
app.use(require('./routes/advdb'));
const PORT = process.env.PORT;

const middleware = (req,res,next) =>{
console.log('Hello my middleware');
next();
}
//middleware();




app.use(express.json())





// app.use((req,res,next)=>{
//   console.log(req.path,req.method)
//   next()
// })


app.get('/',(req,res) => {
    res.send('Hello from server')
});

app.get('/contact',(req,res) => {
  res.send('contact from server')
});

app.get('/about',middleware,(req,res) => {
  res.send('About from server')
});

app.get('/signin',(req,res) => {
  res.send('signin from server')
});

app.get('/signup',(req,res) => {
  res.send('Signup from server')
});

app.get('/newloan',(req,res) => {
  res.send('Enter loan details')
});

app.get('/fee',(req,res) => {
  res.send('Enter fee details')
});

app.get('/hostelfee',(req,res) => {
  res.send('Enter hostelfee details')
});

app.get('/hosfeestatus',(req,res) => {
  res.send('check the status')
});

app.get('/hamfeestatus',(req,res) => {
  res.send('check the status')
});

app.get('/tutionfee',(req,res) => {
  res.send('Enter hostelfee details')
});

app.get('/tutfeestatus',(req,res) => {
  res.send('check the status')
});

app.get('/adv',(req,res) => {
  res.send('Enter Advance Details')
})


//app.use('/api/tution',tutionRoutes)
// app.get('/',(req,res)=>{
//   res.json({mssg:'Welcome to the app'})
// })

// connecting to db


app.listen(process.env.PORT,()=>{
  console.log('connected to db & listening on port', process.env.PORT)  // with using env
  })
// mongoose.connect(process.env.MONG_URI)
//  .then(() => {
//   // listens for requests
  
//  })
//  .catch((error) => {
//   console.log(error)
//  })
