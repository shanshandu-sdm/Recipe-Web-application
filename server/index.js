const express = require("express");
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users')

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://shan123:Woshiduge187$@cluster0.nmyvslg.mongodb.net/shan123?retryWrites=true&w=majority");

app.get("/getUsers", async(req, res) => {
    let users = [];
    try{
      users = await UserModel.find({});
    }catch (error){
      return res.json(error);
    }
    return res.json(users);

});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();
  
  res.json(user);
});


app.listen(3003, () => {
  console.log('Server is running on port 3003');
});

