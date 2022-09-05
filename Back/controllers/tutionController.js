const tution = require('../model')

const mongoose = require('mongoose')

const getTution = async(req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such sem'})
    }
    const tution = await tution.findById(id)
    if(!tution)
    {
        return res.status(404).json({error:'No Such sem'})
    }
    res.status(200).json(tution)
}

module.exports = {
    getTution
}
