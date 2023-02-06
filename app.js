const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//middleware
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8080;

const usersSchema =mongoose.Schema({
  userName:{
    type:String,
    require:true,
    unique: [true, "Please set a unique name"],
    trim: true,
  },
  email:{
    type:String,
    require:true,
    unique: [true, "Please set a unique name"],
    trim: true,
  },
  password:{
    type:String || Number,
    require:true,

  }

})

const Users = mongoose.model("Users", usersSchema);

app.post('/api/users', async(req, res,next) => {
  try{
    const user = new Users(req.body);
    const result = await user.save();
    res.status(200).json({
      status:"success",
      message:"user saved successfully",
      data:result
    })
  }catch(error){
    res.status(400).json({
      status: "Failed",
      message: "data not saved successfully",
      data: error.message,
    });
  }
})
app.get("/api/users", async(req, res, next) => {
  try{
    const email = req.query.email
      const query = { email: email };
    const user = await Users.find(query)
    // console.log(user)
    res.status(200).json({
      status:"success",
      message:"user found successfully",
      data:user
    })
  }
  catch(error){
    res.status(400).json({
      status: "Failed",
      message: "data is not found",
      data: error.message,
    });
  }
})



// run().catch(console.dir);
app.get("/", (req, res) => {
  res.send("Yes continue scholarships australia");
});

app.listen(port, () => {
  console.log(port)
  console.log(`App is running on prot ${port}`.yellow.bold);
});


