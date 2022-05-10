//configuração inicial
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')


//Para ler e receber JSON / middleware = açoes executadas entre requisições
app.use(
    express.urlencoded({
        extended:true,
    }), 
)

app.use(express.json())

//rotas da API
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

// Rota inicial / endpoint
app.get('/', (req, res) => {

   //mostrar requisição
   res.json({message: 'Olá, estou funcionando!'}) 
})

// porta de envio
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apirestful-poc.qji4x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
.then(() => {
    console.log('Conectado ao MongoDB!')
    app.listen(3000)
})
.catch((err) => console.log(err))
