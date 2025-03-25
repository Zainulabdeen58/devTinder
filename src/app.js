const express = require("express");
const connectDB = require("./config/database");
const User  = require("./models/user");

const Port = 1554;

const app = express();

// app.use("/" , (req , res)=>{
//     res.send("route working fine")
// })
app.post("/signup" , async (req , res)=>{
    const data = {
        firstName : "Zain",
        lastName : "Ul Abdeen",
        age : 21,
        email : "dummy@gmail.com",
        gender : "Male",
        password : "1"
    }
       try {
        const user = new User(data);
        // console.log(user);
        
        await user.save();
       
        res.send("Data is the saved in the database");
        // console.log("Save the data in the database");
       } catch (error) {
        res.status(400).send("Data is not the saved in the database")
       }
    
});


const startServer = async()=>{
  try {
   await connectDB();
   console.log("Database is connected successfully");
    app.listen(Port, () => {
      console.log(`server is listening on port ${Port}...`);
    });
  } catch (error) {
    console.log("Database is not connected successfully")
  }
}

startServer();