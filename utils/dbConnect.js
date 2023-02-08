const mongoose = require('mongoose')
function dbConnect(){
  mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yofznvf.mongodb.net/?retryWrites=true&w=majority`).then(() => {
  console.log(`Succeeded to connect the database`.red.bold);
});
}
module.exports=dbConnect;