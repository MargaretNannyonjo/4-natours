const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('./../../models/tour_models');

dotenv.config({ path: './config.env' });

mongoose

  .connect(process.env.DATABASE_LOCAL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(() => {
    console.log('DB connected successfully!');
  });

//Read Json file
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json', 'utf-8`),
);

//Import data into the database

const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data Succesfully loaded');
  } catch (err) {
    console.log(err);
  }
};

//Delete all data from collection
const daleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data Succesfully deleted');
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
