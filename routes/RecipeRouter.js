const express = require('express');
const multer = require('multer');
const recipeRouter = express.Router();
const Titles = require('../Models/Titles')
const Steps = require('../Models/Steps')
const Ingredients = require('../Models/Ingredients')
const { Op } = require("sequelize");

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, './images')
    },
    filename: (req, file, cb)=>{
        cb(null, Date.now() + '--'+ file.originalname)
    }
}) 

const upload = multer({storage: fileStorageEngine})

recipeRouter.route('/')
.get(async(req, res)=>{
    try{
        const titles = await Titles.findAll();
        res.status(200)
        res.send({ titles })
    }catch(err){
        res.send(err.message)
    }
})
//handle adding a new title and image
.post(upload.single('titleImage'), async(req, res)=>{
    const { title, description} = req.body
    const image = req.file.filename
    try{
      const {dataValues:{id}} = await Titles.create({title, description, image})
      res.status(200)
      res.send(`Super suuhweet! inserted with id: ${id}`)
    }catch(err){
        res.send(err.message)
    }
})

recipeRouter.route('/steps/:titleId')
.get(async(req, res)=>{
    const { titleId } = req.params
    try{
        const steps = await Steps.findAll({where:{titleId}});
        const ingredients = await Ingredients.findAll({where:{titleId}})
        res.status(200)
        res.send({steps, ingredients})
    }catch(err){
        res.send(err.message)
    }
})
.post(upload.single('stepImage'), async(req, res)=>{
    const { title, instruction, stepNumber, ingredients } = req.body
    const { titleId } = req.params
    const image = req.file.filename
    try{
       await Steps.create({ titleId, title:title, instruction: instruction, stepNumber:stepNumber, image})

       for( ingredient of JSON.parse(ingredients)){
        await Ingredients.create({...ingredient,stepId:stepNumber, titleId})
      }
      res.status(200)
      res.send('SENT')
    }catch(err){
        res.send(err.message)
    }
})

recipeRouter.route('/search/titles/:keywords')
.get(async(req, res)=>{
    const { keywords } = req.params
    try{
        const titles = await Titles.findAll({where:{title:{[Op.like]:`%${keywords}%`}}});
        res.status(200)
        res.send({titles})
    }catch(err){
        res.send(err.message)
    }
})

recipeRouter.route('/search/descriptions/:keywords')
.get(async(req, res)=>{
    const { keywords } = req.params
    try{
        const titles = await Titles.findAll({where:{description:{[Op.like]:`%${keywords}%`}}});
        
        res.status(200)
        res.send({titles})
    }catch(err){
        res.send(err.message)
    }
})



module.exports = recipeRouter;