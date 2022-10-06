const jwt = require('jsonwebtoken')
const admtutionfeedt = require("../models/AdminstututfeeSchema");
const Authenticate1 = async (req,res,next) => {
     try{
      const token = req.cookies.jwtoken;
      const verifyToken = jwt.verify(token,process.env.SECRET_KEY);

      const rootUser = await admtutionfeedt.findOne({_id:verifyToken.id,"tokens.token":token});

      if(!rootUser) {throw new Error('User not found')}
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();
     } catch(err) {
         res.status(401).send('Unauthorized:No token provided');
        console.log(err);
     }
}

module.exports = Authenticate1; 