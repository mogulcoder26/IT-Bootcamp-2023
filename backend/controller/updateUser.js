const Form = require('../db/models/formModel');
const uploadPicToS3 = require('../middlewares/@aws/uploadPictures');

async function updateUser(req, res) {
    try {
        const { name, about, linkedin, insta, github, email, id } = req.body;

        console.log("Init!");
        try {
            let imageKey;
            if (req.file) {
                const { key: uploadedImageKey } = await uploadPicToS3(req?.file);
                console.log("imageKey : ", uploadedImageKey);
                imageKey = uploadedImageKey;
            }
            const user = {
                name,
                email,
                about,
                linkedin,
                github,
                insta,
            };
            if (imageKey) {
                user.imageKey = imageKey; 
            }
            console.log("Search Index ::",id);
            const searchInDB = await Form.findOne(
                {id:id},
            )
            console.log('searchInDB res ::',searchInDB);
            // Update the user in the database
            const updateU = await Form.findOneAndUpdate(
                { id }, // Find the user with the given id
                { $set: user }, // Update the fields with the new values
                { new: true, useFindAndModify: false } // Ensure that the updated document is returned
            );
            console.log(updateU)
            console.log("User updated successfully!");
            res.send(updateU);
        } catch (e) {
            console.log("err in createHomie = ", e.message);
            throw new Error(e.message);
        }
    } catch (e) {
        console.log(e.message);
        throw new Error(e.message);
    }
}

module.exports = updateUser;
