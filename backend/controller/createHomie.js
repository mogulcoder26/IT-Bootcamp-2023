const Form = require('../db/models/formModel');
const uploadPicToS3 = require('../middlewares/@aws/uploadPictures');

const createHomie = async (req, res) => {

    const { name, email, id, about, linkedin,insta,github } = req.body
    console.log("Init!")
    try {
        const { key : imageKey } = await uploadPicToS3(req?.file);
        console.log("imageKey : " , imageKey);

        const user = {
            name,
            email,
            about,
            id,
            linkedin,
            github,
            insta,
            imageKey
        }
        console.log(user)
        console.log("b4dbentry : ",user);
        const student = new Form(user)
        const resolt = await student.save()
        console.log("saved : ",resolt);
    } catch (e) {
        console.log("err in createHomie = ",e.message);
    }
}
module.exports = createHomie;