const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
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
    loannum:{
        type: String,
        required:true
    },
    bankname:{
        type: String,
        required:true
    },
    loanamount:{
        type: String,
        required:true
    },
    emileft:{
        type: String,
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

loanSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token: token});
        await this.save();
        return token;
    } catch(err){
        console.log(err);
    }
}

const loandata = mongoose.model('LOAN',loanSchema);

module.exports = loandata;