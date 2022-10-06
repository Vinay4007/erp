const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const fundingrequestSchema = new mongoose.Schema({
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
    prevfunddetails:{
        type: String,
        required:true
    },
    fundingamount:{
        type: String,
        required:true
    },
    message:{
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

fundingrequestSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token: token});
        await this.save();
        return token;
    } catch(err){
        console.log(err);
    }
}

const funddata = mongoose.model('FUND',fundingrequestSchema);

module.exports = funddata;