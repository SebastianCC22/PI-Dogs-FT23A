//Requerimos los componentes necesarios 

const { Router } = require('express');
const router = Router();
const { Dog, Temperament } = require('../db.js');
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

    console.log(temperaments)
  
//Creamos una raza en la base de datos.
    try{
        let id = uuidv4();
        dogCreated = await Dog.create({name, height, weight, id})
        // await createNewDog.setTemperaments(temperaments)     

        if (temperaments.length) {
            temperaments.map(async (tem) => {
              try {
                let temper = await Temperament.findOrCreate({ where: { name: tem } });
                // console.log(temper.dataValues.name);
                dogCreated.addTemperament(temper[0]);
                // res.send(dogCreated);
                console.log("Perro Cargado");
              } catch (err) {
                console.log(err);
              }
            });
          }
          res.send("Perro cargado");
    } catch (error){
        next(error)
    }
})

module.exports = router;
