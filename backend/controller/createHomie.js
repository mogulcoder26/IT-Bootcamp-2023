const Form = require('../db/models/formModel');

const createHomie = async (req, res) => {
    console.log(req.body);
    console.log("POSTMAN")
    const { name, email,id, bio, date } = req.body
    const user = {
        name,
        email,
        bio,
        id,
        date
    }
    try {
        const formData = new Form(user)

        formData.save()
            .then(() => {
                res.send(`Form Data of ${user.name} saved in db`)
            })
    } catch (e) {
        res.send(e.message);
    }
}

module.exports = createHomie;