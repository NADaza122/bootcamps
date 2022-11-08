//OBJETO OCNEXION
const sequelize = require('../config/seq')

//DATATYPES
const { DataTypes } = require('sequelize')

//MODELO
const UserModel = require('../models/user')

//CREAR OBJETO USUARIO
const User = UserModel(sequelize, DataTypes)


//CREAR RUTAS ENDPOINTS URL 
//get:obtender datos Read
exports.getUsers = async (req, res) => {
    const users = await User.findAll();
    res.status(200).json(
        {
            //"!MENSAJE IMPORTANTE!" : `se trae todos los Users`
            "sucess": true,
            "data": users
        }
    )
}

//OBTENER RECURSOS POR ID
exports.getSinleUser = async (req, res) => {
    const userId = await User.findByPk(req.params.id)
    res.status(200).json(
        {
            //"!MENSAJE IMPORTANTE!" :  `users cuyo ID es: ${req.params.id}`
            "sucess": true,
            "data": userId
        }
    )
}

//POST:  CREAR UN NUEVO RECURSO
exports.postUser = async (req, res) => {
    try{
        const newUser = await User.create(req.body);
        res.status(201).json(
            {
                //"!MENSAJE IMPORTANTE!" : `aqui se crea un nuevo user`
                "sucess": true,
                "data": newUser
            }
        )
    } catch (error){
        console.log(error)
    }

}

//PUT - PATCH: ACTUALIZAR
exports.putUser = async (req, res) => {
    await User.update(req.body, {
        //ACTUALIZAR POR ID USER
        where: {
            id: req.params.id
        }
    });

    //consultar datos actualizados
    const upUser = await User.findByPk(req.params.id)

    res.status(200).json(
        {
            // "!MENSAJE IMPORTANTE!" : `actualizar el user: ${req.params.id}`
            "sucess": true,
            "data": upUser
        }
    )
}

//DELETE: ELIMINAR
exports.deleteUser = async (req, res) => {
    //buscarusuario por id
    const u = await User.findByPk(req.params.id)

    // borrar usuario po id 
    await User.destroy({
        where: {
            id: req.params.id
        }
    });

    //response
    res.status(200).json(
        {
            "succes": true,
            "data": u
        }
    )
}
