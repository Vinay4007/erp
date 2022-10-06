const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    phone:{
        type: Number,
        required:true
    },
    rating:{
        type: Number,
        required:true
    },
    issues:{
        type: String,
        required:true
    },
    suggestions:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})

feedbackSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token: token});
        await this.save();
        return token;
    } catch(err){
        console.log(err);
    }
}

const feeddata = mongoose.model('FEED',feedbackSchema);

module.exports = feeddata;