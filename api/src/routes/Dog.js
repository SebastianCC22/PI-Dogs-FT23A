//Requerimos los componentes necesarios 

const { Router } = require('express');
const router = Router();
const { Dog } = require('../db.js');
require("dotenv").config();
const { Sequalize, UUID } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

//Recibimos los datos recolectados por el formulario.
router.post('/', async (req, res, next) => {
    const{
        name,
        height,
        weight,
        temperaments
    } = req.body;
  
//Creamos una raza en la base de datos.
    try{
        let id = uuidv4();
        createNewDog = await Dog.create({name, height, weight, id})
        await createNewDog.setTemperaments(temperaments)     
    } catch (error){
        next(error)
    }
})

module.exports = router;
