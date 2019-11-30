/* eslint-disable no-console */
const fs = require('fs');
const request = require('request');
const path = require('path');

const dir = 'data';

// eslint-disable-next-line arrow-body-style
const writeImgFile = (dirIdx, fileIdx) => {
  return request('https://picsum.photos/200/300').on('error', (err1) => { console.log('error before pipe ', err1); }).pipe(fs.createWriteStream(path.join(__dirname, `${dir}`, `${dirIdx}`, `${fileIdx}.jpeg`))).on('close', ((err) => {
    if (err) {
      // throw err;
      console.log('err ', err);
    }
    console.log('Image saved ', dirIdx, fileIdx);
  }));
};

for (let i = 0; i < 100; i += 1) {
  fs.mkdir(path.join(__dirname, `${dir}`, `${i}`), { recursive: true }, (err) => {
    if (err) {
      throw err;
    } else {
      console.log('Created new directory.');

      setTimeout(() => { writeImgFile(i, 'one'); }, 2000);
      setTimeout(() => { writeImgFile(i, 'two'); }, 7000);
      setTimeout(() => { writeImgFile(i, 'three'); }, 15000);
      setTimeout(() => { writeImgFile(i, 'four'); }, 26000);
      setTimeout(() => { writeImgFile(i, 'five'); }, 39000);
      setTimeout(() => { writeImgFile(i, 'six'); }, 65000);
    }
  });
}
