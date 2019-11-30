/* eslint-disable no-console */
const AWS = require('aws-sdk');
const request = require('request');
const db = require('../database/index');

// Set the region
AWS.config.update({ region: 'us-west-2' });

// Create S3 service object
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

s3.listBuckets((err, data) => {
  if (err) console.log(err, err.stack); // an error occurred
  else console.log(data); // successful response
});

// call S3 to retrieve upload file to specified bucket
const uploadParams = { Bucket: 'immersive-photo-bucket', Key: '', Body: '' };

const writeFileToS3 = (dirIdx, fileIdx) => {
  return request({
    url: 'https://picsum.photos/200/300',
    encoding: null,
  }, (err, data) => {
    if (err) {
      console.log(err);
    }
    if (data && data.body) {
      uploadParams.Body = data.body;
      uploadParams.Key = `images/${dirIdx}/${fileIdx}.jpeg`;

      // call S3 to retrieve upload file to specified bucket
      s3.upload(uploadParams, (error, s3Data) => {
        if (error) {
          console.log('Error', error);
        } if (s3Data) {
          console.log('Upload Success', s3Data.Location);

          const query = `INSERT INTO photos (Listing_id, photoUrl) VALUES (${dirIdx}, "${s3Data.Location}")`;

          db.query(query, (dbError) => {
            if (dbError) {
              console.log(dbError);
            } else {
              console.log('saved to database');
            }
          });
        }
      });
    }
  });
};

for (let i = 0; i < 100; i += 1) {
  setTimeout(() => { writeFileToS3(i, 'one'); }, 2000);
  setTimeout(() => { writeFileToS3(i, 'two'); }, 7000);
  setTimeout(() => { writeFileToS3(i, 'three'); }, 15000);
  setTimeout(() => { writeFileToS3(i, 'four'); }, 26000);
  setTimeout(() => { writeFileToS3(i, 'five'); }, 39000);
  setTimeout(() => { writeFileToS3(i, 'six'); }, 65000);
}
