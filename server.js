const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./app");
const dbConnect = require("./utils/dbConnect");

// const url=

//database connection
dbConnect()

//server
const port = process.env.PORT || 8080;

// app.listen(port, () => {
//     console.log(port)
//     console.log(`App is running on prot ${port}`.yellow.bold);
//   });

