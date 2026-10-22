//app.get() - Lidar com solicitações GET 
//app.post() - Gerenciar solicitações POST 
//app.put() - Lidar com solicitações PUT
//app.delete() - Gerenciar solicitações de DELETE
//app.all() - Lidar com todos os métodos HTTP
//req — contém as informações enviadas pelo cliente.
//res — representa a resposta que o servidor devolverá.

import { MongoClient } from 'mongodb' //library to connect to a local MongoDB server
import 'dotenv/config'
import express from 'express'

import dns from 'node:dns' 
dns.setServers(['1.1.1.1', '8.8.8.8']) 

const app = express()
app.use(express.json())
const client = new MongoClient(process.env.MONGO_URI)

client.connect().then(() =>{
    const db = client.db('authsystem')
    const users = db.collection('users')

    app.post('/register', (req, res) => {
        const { email, password } = req.body 

        res.sendStatus(204)
    })

    app.listen(3000)
})