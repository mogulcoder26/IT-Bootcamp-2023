const Form = require('../db/models/formModel');

async function Checker(req,res) {
    console.log("Inside Checker");
    console.log("params =" ,req.params);
    console.log("body =" ,req.body);
    const {ID} = req.body;
    console.log(ID);


    const searchResults = await Form.find({ id: "ID" });
    if (searchResults[0] === undefined) {
        console.log("Registered!");
        res.json({
            "registered":true,
        });
    }
    else{
        res.json({
            "registered":false,
        }); 
    }
}
module.exports = Checker