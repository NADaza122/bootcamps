//OBJETO CONEXION
const sequelize = require('../config/seq')

//DATATYPES
const { DataTypes, ValidationError } = require('sequelize')

//MODELO
const UserModel = require('../models/user')

//CREAR OBJETO USUARIO
const User = UserModel(sequelize, DataTypes)


//CREAR RUTAS ENDPOINTS URL 
//get:obtender datos Read
exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(
            {
                //"!MENSAJE IMPORTANTE!" : `se trae todos los Users`
                "sucess": true,
                "data": users
            }
        )
    } catch (error) {
        //ERRORES SERVIDOR
        res
           .status(500)
           .json({
            "sucess": false,
            "errors": "error de servidor :b"
           })
    }
}

//OBTENER RECURSOS POR ID
exports.getSinleUser = async (req, res) => {
    try {
        const userId = await User.findByPk(req.params.id)
        //SI EL USARIO NO EXISTE
        if(!userId){
            res.status(422).json(
                {
                    //"!MENSAJE IMPORTANTE!" :  `users cuyo ID es: ${req.params.id}`
                    "sucess": true,
                    "errors": ["!EL USUARIO QUE BUSCA NO EXISTE!"]
                }
            )
        }else {
            res.status(200).json(
            {
                //"!MENSAJE IMPORTANTE!" :  `users cuyo ID es: ${req.params.id}`
                "sucess": true,
                "errors": userId
            }
        )
        }
    } catch (error) {
        //ERRORES SERVIDOR
        res
           .status(500)
           .json({
            "sucess": false,
            "errors": "error de servidor :b"
           })
    }
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
        //MENSAJES DE ERRORES DE PUESTO EN UNA VARIABLE
        if(error instanceof ValidationError){
        const errores = error.errors.map((e)=>e.message)

        //LLEVAR LOS ERRORES AL REPSONSE
        res
           .status(422)
           .json({
            "sucess": false,
            "errors": errores
           })
        //console.log(error.errors[0].message)
    }else{
        //ERRORES SERVIDOR
        res
           .status(500)
           .json({
            "sucess": false,
            "errors": "error de servidor :b"
           })
        }
    }
}

//PUT - PATCH: ACTUALIZAR
exports.putUser = async (req, res) => {
    try {
        //consultar usuario existente
        const upUser = await User.findByPk(req.params.id)

        if(!upUser){
            //REPONSE USUARIO NO ENCONTRADO
            res.status(422).json(
                {
                    //"!MENSAJE IMPORTANTE!" :  `users cuyo ID es: ${req.params.id}`
                    "sucess": true,
                    "errors": ["!EL USUARIO QUE BUSCA NO EXISTE!"]
                }
            )
        }else{
            await User.update(req.body, {
                //ACTUALIZAR POR ID USER
                where: {
                    id: req.params.id
                }
            });

            //SELECCIONAR USUARIO ACTUALIZADO
            const userAct = await User.findByPk(req.params.id)
            //RESPONSE CON USUARIO ACTUALIZADO
            res.status(200).json(
                {
                    "sucess": true,
                    "data": userAct
                }
            )
        }
    } catch (error) {
        //ERRORES SERVIDOR
        res
           .status(500)
           .json({
            "sucess": false,
            "errors": "error de servidor :b"
           })
        }
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
