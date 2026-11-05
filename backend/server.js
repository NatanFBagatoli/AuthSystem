//app.get() - Lidar com solicitações GET 
//app.post() - Gerenciar solicitações POST 
//app.put() - Lidar com solicitações PUT
//app.delete() - Gerenciar solicitações de DELETE
//app.all() - Lidar com todos os métodos HTTP
//req — contém as informações enviadas pelo cliente.
//res — representa a resposta que o servidor devolverá.

import jwt from 'jsonwebtoken'
import { MongoClient, ObjectId } from 'mongodb' //library to connect to a local MongoDB server
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import argon2 from 'argon2'
import dns from 'node:dns'
dns.setServers(['1.1.1.1', '8.8.8.8'])

const app = express()
app.use(cors())
app.use(express.json())
const client = new MongoClient(process.env.MONGO_URI)

function auth(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1] // formato Bearer <token>
    if (!token) return res.sendStatus(401)

    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET)
        next()
    } catch {
        res.sendStatus(401)
    }
}

client.connect().then(() => {
    const db = client.db('authsystem')
    const users = db.collection('users')
    users.createIndex({ email: 1 }, { unique: true })
        .then(() => app.listen(3000))
    app.post('/register', (req, res) => {
        const { email, password } = req.body
        argon2.hash(password).then((hash) => {
            return users.insertOne({
                email: email.trim().toLowerCase(),
                passwordHash: hash
            })
        })
            .then(() => {
                res.sendStatus(201)
            })
            .catch((error) => {
                res.sendStatus(error.code === 11000 ? 409 : 500)
            })
    })
    app.post('/login', (req, res) => {
        const { email, password } = req.body
        users.findOne({ email: email.trim().toLowerCase() })
            .then((user) => {
                if (!user) {
                    return res.sendStatus(401)
                }
                return argon2.verify(user.passwordHash, password)
                    .then((valid) => {
                        if (!valid) {
                            return res.sendStatus(401)
                        }
                        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
                        res.json({ token, email: user.email })
                    })
            })
            .catch(() => {
                res.sendStatus(500)
            })

    })
    app.put('/user', auth, (req, res) => {
        const { newEmail } = req.body
        users.updateOne(
            { _id: new ObjectId(req.user.id) },
            { $set: { email: newEmail.trim().toLowerCase() } }
        )
            .then((result) => {
                res.sendStatus(result.matchedCount === 0 ? 404 : 200)
            })
            .catch((error) => {
                res.sendStatus(error.code === 11000 ? 409 : 500)
            })
    })
    
    app.put('/user/password', auth, (req, res) => {
        const { newPassword } = req.body

        argon2.hash(newPassword)
            .then((hash) => users.updateOne(
                { _id: new ObjectId(req.user.id) },
                { $set: { passwordHash: hash } }
            ))
            .then((result) => {
                res.sendStatus(result.matchedCount === 0 ? 404 : 200)
            })
            .catch(() => res.sendStatus(500))
    })

    app.delete('/user', auth, (req, res) => {
        users.deleteOne({ _id: new ObjectId(req.user.id) })
            .then((result) => {
                res.sendStatus(result.deletedCount === 0 ? 404 : 200)
            })
            .catch(() => res.sendStatus(500))
    })

 })
//npm install jsonwebtoken