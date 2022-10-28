const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const listEnpoints = require('express-list-endpoints')

//DEPENDENCIA CONEXION A LA DB
const connectDB = require('./config/db')
//DEPENDENCIAS A LAS RUTAS
const bootcampRoutes = require('./routes/BootcampRoutes')
const userRoutes = require('./routes/UserRoutes')

//establecer el arcihvo de configuracion con variables de entorno del proyecto
dotenv.config({
    path: './config_env/config.env'
})

//1. CREAR EL OBJETO QUE REPRESENTA EL SISTEMA QUE SE ESTA CREANDO
const app = express()
app.use(express.json())

//EJEUCTAR LA CONEXION DE LA DB
connectDB()

//2. CREAR UNA RUTA DE PRUEBA
/*app.get('/', (request, response)=>{
    response.send('Ruta funcional ✌')
})*/

app.use("/api/v1/bootcamps", bootcampRoutes)
app.use("/api/v1/users", userRoutes)

console.log(listEnpoints(app))

//3. EJECUTAR EL SERVIDOR DEL DESARRROLLO DE EXPRESS
app.listen( process.env.PORT, ()=>{
    console.log(`SERVIDOR INICIADO EN PUERTO 😁: ${ process.env.PORT }`.bgMagenta)
})