const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
const dotenv =  require('dotenv').config();

connectDb();
const app = express();
const port = 8080;

app.get('/' , (req , res) => {
    res.send("You are in dev server");

})

app.use(express.json()); // To parse the data recieved in POST req undefined --> JSON
app.use("/api/contacts" , require("./routes/contactRoutes"));
app.use("/api/users" , require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port , () => {
    console.log(`Server is Listening to ${port} `);
});
