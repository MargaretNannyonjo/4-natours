const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

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

/// START SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}....`);
});
