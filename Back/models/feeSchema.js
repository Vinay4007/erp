const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const feeSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    branch:{
        type: String,
        required:true
    },
    semester:{
        type: Number,
        required:true
    },
    amount:{
        type: Number,
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

feeSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token: token});
        await this.save();
        return token;
    } catch(err){
        console.log(err);
    }
}

const feedt = mongoose.model('FEE',feeSchema);

module.exports = feedt;