import Express from "express";
import cors from "cors";
import {readdirSync} from "fs";
import mongoose from "mongoose";
const morgan = require("morgan");
require("dotenv").config();


// create express app
const app = Express();

// db
mongoose.connect(process.env.DATABESE,{

    
}).then(()=>console.log("db connected"))
.catch((err) => console.log("db not connectd",err));


//apply midlware
app.use(cors());
app.use(Express.json());
app.use(morgan("dev"));



//route

readdirSync("./routes").map((r) =>
 app.use("/auth", require(`./routes/${r}`))
 );


//port
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`)); 