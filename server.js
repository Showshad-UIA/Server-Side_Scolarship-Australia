const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./app");

//database connection
mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
  console.log(`Succeeded to connect the database`.red.bold);
});

//server
const port = process.env.PORT || 8080;

// app.listen(port, () => {
//     console.log(port)
//     console.log(`App is running on prot ${port}`.yellow.bold);
//   });

