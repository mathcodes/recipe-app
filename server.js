const bodyParser = require('body-parser');
const express = require('express')
const recipeRouter = require('./routes/RecipeRouter')
const sequelize = require("./database");
const cors = require('cors')

const port = 5001;

const app = express()

app.use(cors({orgin:'*'}))
app.use(bodyParser.json());
app.use(express.static(__dirname+'/images'));

app.use('/recipe', recipeRouter)

sequelize.sync().then(() => console.log("db is ready"));

app.listen(port, ()=>{
    console.log(`App started on port: ${port}`)
})