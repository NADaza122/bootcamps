const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')

//DEPENDENCIAS A LAS RUTAS
const bootcampRoutes = require('./routes/BootcampRoutes')

//establecer el arcihvo de configuracion con variables de entorno del proyecto
dotenv.config({
    path: './config_env/config.env'
})

//1. CREAR EL OBJETO QUE REPRESENTA EL SISTEMA QUE SE ESTA CREANDO
const app = express()

//2. CREAR UNA RUTA DE PRUEBA
/*app.get('/', (request, response)=>{
    response.send('Ruta funcional ✌')
})*/

app.use("/api/v1/bootcamps", bootcampRoutes)

//

//3. EJECUTAR EL SERVIDOR DEL DESARRROLLO DE EXPRESS
app.listen( process.env.PORT, ()=>{
    console.log(`SERVIDOR INICIADO EN PUERTO 😁: ${ process.env.PORT }`.bgMagenta)
})