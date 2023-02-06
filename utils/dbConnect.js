const { MongoClient } = require("mongodb");
const connectionString = 'mongodb://scholarships_australia:wGGBhTLq7XS3cUHT@main-shard-00-00-03xkr.mongodb.net:27017,main-shard-00-01-03xkr.mongodb.net:27017,main-shard-00-02-03xkr.mongodb.net:27017/main?ssl=true&replicaSet=Main-shard-0&authSource=admin&retryWrites=true';
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
console.log(connectionString);

let dbConnection;


module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }
      dbConnection = db.db("scholarships_australia");
      console.log("Successfully connected to MongoDB.");
      return callback();
    });
  },

  getDb: function () {
    return dbConnection;
  },
};