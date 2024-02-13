import mongoose from "mongoose";
const Connection = async (username, password) => {
  const url =
    "mongodb://techidnessdeveloper:techidnessdeveloper@ac-eorbxv2-shard-00-00.zmgh3xi.mongodb.net:27017,ac-eorbxv2-shard-00-01.zmgh3xi.mongodb.net:27017,ac-eorbxv2-shard-00-02.zmgh3xi.mongodb.net:27017/Mykart?ssl=true&replicaSet=atlas-24cyy6-shard-0&authSource=admin&retryWrites=true&w=majority";
  try {
    await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database Connected Succesfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export default Connection;
