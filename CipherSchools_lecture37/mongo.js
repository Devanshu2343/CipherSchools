const {connect} = require("mongoose");
const MONGO_URL= "mongodb+srv://Devanshu:1234asdf@cluster0.yvqefp9.mongodb.net";
const DB_NAME="cs-mern";


async function connectDb(){
  try{
    await connect(`${MONGO_URL}/${DB_NAME}`);
    console.log(`MongoDb connected.`);
  }catch(err){
    console.error(err);
  }
}
connectDb();
