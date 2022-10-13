// import config from "#config";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/", () => {
    console.log("Connected to MongoDBc");
});
export default mongoose;
