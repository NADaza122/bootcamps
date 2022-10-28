const colors = require('colors')
const sequelize = require('./seq')

//  DEPENDECIA PARA EL MODELO
/*const UserModel = require('../models/user')
//DEPENDECIA DATATYPES
const {DataTypes} = require('sequelize')


//CREAR EL MODELO
const User = UserModel(sequelize, DataTypes)*/


//CREAR LA FUNCION ASYNCRONA PARA LA CONEXION
const connectDB = async()=>{
    try{
        await sequelize.authenticate()
        console.log('La conexion se establecio correctamente :v' .bgBlue.white)
        
        //SELECCIONAR TODOS LOS USUARIOS:
        /*const users = await User.findAll();
        console.log(users)

        //CREAR UN USUARIO
        const add =  await User.create({ name: "Crystal", email: "crystal00@gmail.com", password: "flores"});
        console.log("El user agregado tiene su ID:", add.id);*/

        //ACTUALIZAR UN USUARIO
    }catch(error){
        console.error(error)
    }
}

//connectDB()
//EJECUTAR LA FUNCION
module.exports = connectDB