const { getDb } = require("../Utils/dbConnect");

module.exports.getUsers = async (req, res, next) => {
  res.send("yes you are get");
};
module.exports.saveUsers = async (req, res, next) => {
  try {
    const db = getDb();
    const tool = req.body;
    const result = await db.collection("users").insertOne(tool);
    console.log(result);
    // if (!result.insertedId) {
    //   return res
    //     .status(404)
    //     .send({ status: false, error: "Something went wrong" });
    // }
    res.send(`Tools added with id ${result.insertedId}`);
  } catch (error) {
    next(error);
  }
  res.send("all user are saved");
};
