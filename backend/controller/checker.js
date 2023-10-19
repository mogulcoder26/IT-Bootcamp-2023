const Form = require('../db/models/formModel');

async function Checker(req, res) {
    try {
        console.log("Inside Checker");
        console.log("params =", req.params);
        console.log("body =", req.body);
        const { ID } = req.body;
        console.log(ID);

        const searchResults = await Form.find({ id: ID });
        if (!searchResults || searchResults.length === 0) {
            console.log("Not Registered!");
            res.send({
                registered: false,
            });
        } else {
            console.log("Registered!");
            res.send({
                registered: true,
                user:searchResults
            });
        }
    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = Checker