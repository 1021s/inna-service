/* eslint-disable no-console */
const express = require('express');
const db = require('../database/index');

const PORT = 3000 || process.env.PORT;

const app = express();

app.use(express.json());

app.get('/api/photos', (req, res) => {
  db.query('SELECT * FROM photos', (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      const memory = {};
      const results = [];
      let count = 0;

      for (let i = 0; i < data.length; i += 1) {
        if (!memory[data[i].Listing_id]) {
          memory[data[i].Listing_id] = count;
          results[count] = {
            Listing_id: data[i].Listing_id,
            images: [],
          };

          count += 1;
        }

        results[memory[data[i].Listing_id]].images.push(data[i].photoUrl);
      }
      res.send(results);
    }
  });
});

app.get('/api/photos/:id', (req, res) => {
  db.query(`SELECT * FROM photos WHERE Listing_id = ${req.params.id}`, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      if (data.length === 0) {
        res.send([]);

        return;
      }

      const result = {
        Listing_id: data[0].Listing_id,
        images: [],
      };

      for (let i = 0; i < data.length; i += 1) {
        result.images.push(data[i].photoUrl);
      }
      res.send(result);
    }
  });
});

app.listen(PORT, () => {
  console.log('Server listening on port: ', PORT);
});
