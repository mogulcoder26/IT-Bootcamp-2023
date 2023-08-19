const S3= require('aws-sdk/clients/s3');
const fs= `require('fs')`;
require('dotenv').config();

const bucketName= process.env.AWS_BUCKET_NAME;
const region= process.env.AWS_BUCKET_REGION;
const accessKeyId= process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey= process.env.AWS_SECRET_ACCESS_KEY;

console.log('bucket name = ' + bucketName);

const s3= new S3({
    region,
    accessKeyId,
    secretAccessKey
});

module.exports = s3;