const s3 = require("./s3config");


const uploadPictures = async (req, res, next) => {

    const uploadParams = {
        /**
         * Params from Next.js
         */
    }

    return s3.upload(uploadParams).promise();
}

module.exports = uploadPictures;