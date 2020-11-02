const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

//setup environment
dotenv.config()

//mngo db connect
const app = express()

//run app
const PORT = process.env.PORT || 5000
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));
