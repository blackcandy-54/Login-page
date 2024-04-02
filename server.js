const express = require("express");
const app = express();
const connectDB = require("./connectDB.js")
const path = require("path")

app.set("view engine", "ejs");
app.set("views", "./frontend");
app.use(express.static(path.join('./frontend')));
app.use(express.json());

app.get("/", (req, res) => res.render("index"));
app.use("/api/user", require("./router/user.js"))

const PORT = "2002"

const connect = async() => {
    try{
        app.listen(PORT, () => {
            console.log(`PORT LISTENING INITIALIZED on ${PORT}`)
        });
      
        await connectDB();

    }catch(e){
        console.log(e)
    }
};

connect();