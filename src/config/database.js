const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.connect(
    "mongodb+srv://Zain1554:RLNjsW6VTnqHgmT6@cluster0.qzkyk.mongodb.net/devTinderDB"
  );
};

module.exports = connectDB;
