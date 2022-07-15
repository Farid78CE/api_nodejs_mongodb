require('dotenv').config({path:".env"});
const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;
// const bodyParser = require("body-parser");
// const cors = require("cors");

const app = express();
const peopleRouter = require("./routes/people_api/people.js");

mongoose.connect("mongodb+srv://admin:admin@fullstackexpressvue.wskfn.mongodb.net/test", { useNewUrlParser: true, });
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.once('connected', () => {
    console.log("Database Connected");
});



// MiddleWare
app.use(express.json());
app.use("/api/people", peopleRouter);
// app.use(bodyParser.json());
// app.use(cors());


// process.env.PORT ||
const port = 5000 ;

app.listen(port, ()=>{
    console.log(`server started on ${port}`);
})





