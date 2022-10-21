const express = require('express');
const multer = require('multer');
const recipeRouter = express.Router();
const Titles = require('../Models/Titles')
const Steps = require('../Models/Steps')
const Ingredients = require('../Models/Ingredients')
const { Op } = require("sequelize");
const fs = require('fs')

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, './images') // call back determines destination
    },
    filename: (req, file, cb)=>{
        cb(null, Date.now() + '--'+ file.originalname)//cb gets filename
    }
}) 

const upload = multer({storage: fileStorageEngine})

recipeRouter
  .route("/")
  //get all titles
  .get(async (req, res) => {
    try {
      const titles = await Titles.findAll();
      res.status(200);
      res.send({ titles });
    } catch (err) {
      res.send(err.message);
    }
  })
  //handle adding a new title and image
  .post(upload.single("titleImage"), async (req, res) => {
    const { title, description } = req.body;
    const image = req.file.filename;
    try {
      const {
        dataValues: { id },
      } = await Titles.create({ title, description, image });
      res.status(200);
      res.send(`Super suuhweet! inserted with id: ${id}`);
    } catch (err) {
      res.send(err.message);
    }
  })
  //update titles
  .put(upload.single("titleImage"), async (req, res) => {
    const { title, description, id } = req.body;
    let newTitle = {};

    const { dataValues: prevTitle } = await Titles.findOne({ where: { id } });
    if (title) newTitle.title = title;
    if (description) newTitle.description = description;
    if (req.file?.filename) {
      fs.unlink(process.cwd() + "\\images" + "\\" + prevTitle.image, (err) => {
        if (err) {
          throw err;
        }
        console.log("image deleted successfully.");
      });
      newTitle.image = req.file.filename;
    }

    await Titles.update({ ...newTitle }, { where: { id } });

    try {
      res.status(200);
      res.send(`Success`);
    } catch (err) {
      res.status(400);
      res.send(err.message);
    }
  });


recipeRouter.route('/steps/:titleId')
//get all steps by title id
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
//add step
.post(upload.single('stepImage'), async(req, res)=>{
    const { title, instruction, stepNumber, ingredients } = req.body
    const { titleId } = req.params
    const image = req.file.filename
    try{
       await Steps.create({ titleId, title:title, instruction: instruction, stepNumber:stepNumber, image})

       for( ingredient of JSON.parse(ingredients)){
        await Ingredients.create({ingredient, stepNumber, titleId}) 
      }
      res.status(200)
      res.send('SENT')
    }catch(err){
        res.send(err.message)
    } 
})
.put(upload.single("titleImage"), async (req, res) => {
    const { stepNumber ,title, instruction, ingredients } = req.body;
    const { titleId } = req.params;
    let updatedStep = {};

    const { dataValues: prevStep } = await Steps.findOne({ where: { titleId, stepNumber } });

    if (title) updatedStep.title = title;
    if (instruction) updatedStep.instruction = instruction;
    if(ingredients){
        // delete previous ingredients
        Ingredients.destroy({where:{stepNumber}})
        //add ingredients
        for( ingredient of JSON.parse(ingredients)){
          await Ingredients.create({ingredient, stepNumber, titleId})
        }
    }
    if (req.file?.filename) {
      fs.unlink(process.cwd() + "\\images" + "\\" + prevStep.image, (err) => { 
        if (err) {
          throw err;
        }
        console.log("image deleted successfully.");
      });
      updatedStep.image = req.file.filename;
    }

    await Steps.update({ ...updatedStep }, { where: { titleId, stepNumber } });

    try {
      res.status(200);
      res.send(`Success`);
    } catch (err) {
      res.status(400);
      res.send(err.message);
    }
  });

//search all titles by keyword
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

//search all descritons by keyword
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