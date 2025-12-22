const express = require('express');
const app = express();
const dotenv =  require('dotenv').config();

const port = 8080;

app.get('/' , (req , res) => {
    res.send("You are in dev server");

})

app.use("/api/contacts" , require("./routes/contactRoutes"));
app.use(express.json()); // To parse the data recieved in POST req

app.listen(port , () => {
    console.log(`Server is Listening to ${port} `);
});
