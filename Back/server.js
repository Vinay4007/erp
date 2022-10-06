//require('dotenv').config()
const dotenv = require("dotenv");
const express = require("express")
const mongoose = require('mongoose')
const app = express()
dotenv.config({path:'./.env'});
require('./db/connec');
require('./db/connec1');
const cors=require("cors");

const cookieParser = require('cookie-parser');
app.use(cookieParser()) ;

// const Authenticate = require("../middleware/authenticate")
const User = require('./models/userSchema')
const loandata = require('./models/loanSchema');
const feedt = require('./models/feeSchema');
const hosfeedt = require('./models/hosfeeSchema');
const tutionfeedt = require('./models/tutionSchema');
const advdata = require('./models/advSchema');
const funddata = require('./models/fundingrequestSchema');
const facultysignupSchema = require('./models/FacsignupSchema');
const adminSchema = require('./models/AdminsignupSchema');
const feeddata = require('./models/FeedbackSchema');
const ADMTUTIONFEE = require('./models/AdminstututfeeSchema');
const ADMHOSTELFEE = require('./models/AdminstuhosfeeSchema');

//const tutionRoutes = require('./routes/tution')
// let alert = require('alert');
// middleware


app.use(express.json());

//for mess pdf
app.use(cors())
app.get("/",(req,res) => {
  res.download("./messfee.pdf");
})

app.use(require('./routes/auth'));
app.use(require('./routes/loandb'));
app.use(require('./routes/feedb'));
app.use(require('./routes/hosfeedb'));
app.use(require('./routes/tutionfeedb'));
app.use(require('./routes/advdb'));
app.use(require('./routes/fundrequestdb'));
app.use(require('./routes/auth1'));
app.use(require('./routes/auth2'));
app.use(require('./routes/feedbackdb'));
app.use(require('./routes/Adminstututdb'));
app.use(require('./routes/Adminstuhosdb'));

const PORT = process.env.PORT;

// const middleware = (req,res,next) =>{
// console.log('Hello my middleware');
// next();
// }
//middleware();




app.use(express.json())





// app.use((req,res,next)=>{
//   console.log(req.path,req.method)
//   next()
// })


app.get('/',(req,res) => {
    res.send('Hello from server')
});
//app.use(cors())
// app.get('/tutfeestatus',(req,res) => {
//   res.send('check the status')
// });


app.get('/contact',(req,res) => {
  res.send('contact from server')
});



app.get('/tutfeestatus',(req,res) => {
  res.send('check the status')
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

app.get('/hosfeestatus',(req,res) => {
  res.send('check the status')
});

app.get('/tutionfee',(req,res) => {
  res.send('Enter hostelfee details')
});

app.get('/admtutionfee',(req,res) => {
  res.send('Entering tutionfee details')
});


app.get('/admhostelfee',(req,res) => {
  res.send('Entering hostelfee details')
});

app.get('/adv',(req,res) => {
  res.send('Enter Advance Details')
})
app.get('/fund',(req,res) => {
  res.send('Enter Funding Details')
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