const mongoose = require("mongoose");

const connectDb = async () => {

    mongoURI = "mongodb+srv://Test:Test@cluster0.shiz8fx.mongodb.net/?retryWrites=true&w=majority";
    
    try{
        console.log(`Trying to Connect DB`)
        const connect = await mongoose.connect(mongoURI);
        console.log(`DATABASE CONNECTED SUCCESSFULLY`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDb;