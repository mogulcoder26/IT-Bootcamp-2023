const Form = require('../db/models/formModel');

const fetchUserList = async(req,res) =>{
    console.log("CONNECTION")
    try{
        const studentArray = await Form.find();
        res.json(studentArray);
    }catch(e){
        res.json(e.message);
    }
}

module.exports = fetchUserList;