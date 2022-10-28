const express = require('express')

const router = express.Router()

//CREAR RUTAS ENDPOINTS URL 
//get:obtender datos Read
router.get('/' , (req, res) =>{
    res.status(200).json(
        {
            "Mensaje" : `se trae todos los bootcamps`
        }
    )
})

//OBTENER RECURSOS POR ID
router.get('/:id' , (req, res)=>{
    res.status(200).json(
        {
            "Mensaje" :  `bootcamps cuyo ID es: ${req.params.id}`
        }
    )
})

//POST:  CREAR UN NUEVO RECURSO
router.post('/', (req, res)=>{
    res.status(201).json(
        {
            "Mensaje" : `aqui se crea un nuevo bootcamp`
        }
    )
})

//PUT - PATCH: ACTUALIZAR
router.put('/:id' , (req, res)=>{
    res.status(200).json(
        {
            "Mensaje" : `actualizar el bootcamp: ${req.params.id}`
        }
    )
})

//DELETE: ELIMINAR
router.delete('/:id' , (req, res)=>{
    res.status(200).json(
        {
            "Mensaje" : `eliminar el bootcamp: ${req.params.id}`
        }
    )
})

module.exports = router

