const Form = require('../db/models/formModel');
const uploadPicToS3 = require('../middlewares/@aws/uploadPictures');

const createHomie = async (req, res) => {
    console.log(req.body);
    console.log("POSTMAN")
    const { name, email,id, about} = req.body
    


    const user = {
        name,
        email,
        bio,
        id,
        date
    }
    try {
        // uploadPicToS3(req.files.student_pic)
        // const formData = new Form(user)

        // formData.save()
        //     .then(() => {
        //         res.send(`Form Data of ${user.name} saved in db`)
        //     })
    } catch (e) {
        res.send(e.message);
    }
}

module.exports = createHomie;