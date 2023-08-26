const Form = require('../db/models/formModel');

let i = 0;
const fetchUserList = async(req,res) =>{
    console.log("CONNECTION Number : " , i++)
    try{
        const studentArray = await Form.find();
        res.json(studentArray);
    }catch(e){
        res.json(e.message);
    }
}

module.exports = fetchUserList;