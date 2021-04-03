const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // help to connect with MongoDB

require('dotenv').config(); // allow me to have environment variable

const app = express();
const port = process.env.PORT || 5000; //either 3000 or the port num in the environment config

//middleware
app.use(cors());
app.use(express.json());

//connect with MongoDB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('MongoDB database connection established successfully');
})

// import modules
const exercisesRouter = require('./routes/exercises')
const usersRouter = require('./routes/users');


app.use('/', express.static('./public')); //after build the frontend, do this. the express app will serve the react app
//when url is exercises/users, it will use code on the files
app.use('/exercises', exercisesRouter)
app.use('/users', usersRouter)

//start the server
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});