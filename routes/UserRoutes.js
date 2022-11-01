const express = require('express')
const { getUsers, 
        getSinleUser, 
        postUser, 
        putUser, 
        deleteUser } = require('../controllers/UserController')

const router = express.Router()

/*
//CREAR RUTAS ENDPOINTS URL 
//get:obtender datos Read
router.get('/' , (req, res) =>{
    res.status(200).json(
        {
            "!BIEVENIDO!" : `se trae todos los Users`
        }
    )
})

//OBTENER RECURSOS POR ID
router.get('/:id' , (req, res)=>{
    res.status(200).json(
        {
            "!BIEVENIDO!" :  `users cuyo ID es: ${req.params.id}`
        }
    )
})

//POST:  CREAR UN NUEVO RECURSO
router.post('/', (req, res)=>{
    console.log(req.body)
    res.status(201).json(
        {
            "!BIEVENIDO!" : `aqui se crea un nuevo user`
        }
    )
})

//PUT - PATCH: ACTUALIZAR
router.put('/:id' , (req, res)=>{
    res.status(200).json(
        {
            "!BIEVENIDO!" : `actualizar el user: ${req.params.id}`
        }
    )
})

//DELETE: ELIMINAR
router.delete('/:id' , (req, res)=>{
    res.status(200).json(
        {
            "!BIEVENIDO!" : `eliminar el user: ${req.params.id}`
        }
    )
})*/

//RUTAS DE USUARIO
router.route('/')
            .get(getUsers)
            .post(postUser)

router.route('/:id')
            .get(getSinleUser)
            .put(putUser)
            .delete(deleteUser)

module.exports = router

