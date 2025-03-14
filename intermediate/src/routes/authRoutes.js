import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import db from '../db.js'

const router = express.Router()

//register a new user endpoint /auth/register
router.post('/register', (req, res) => {
    const { username, password } = req.body
    const hashedPwd = bcrypt.hashSync(password, 8)
    console.log(`username: ${username}, password: ${hashedPwd}`)
    try {
        //prepare query to check if the user already exists
        const checkUser = db.prepare('SELECT id from users where username = ?')
        //execute select query
        let result = checkUser.get(username)
        console.log(result)

        if (result) {
            const token = jwt.sign({ id: result.id }, process.env.JWT_SECRET_KEY, { expiresIn: '24h' })
            console.log(JSON.stringify({ message: 'username already exists', token }))
            res.status(200).json({ message: 'username already exists', token })
        }
        else {
            //prepare insert query
            const insertUser = db.prepare('INSERT into users (username, password) values (?, ?)')
            //execute query
            result = insertUser.run(username, hashedPwd)
            
            //add user's default task
            const defaultTodo = `Hello ${username}. Add your first task`
            const insertTodo = db.prepare('INSERT INTO todos (user_id, task) values (?, ?)')
            result = insertTodo.run(result.lastInsertRowid, defaultTodo)

            //return JWT
            const token = jwt.sign({ id: result.lastInsertRowid }, process.env.JWT_SECRET_KEY, { expiresIn: '24h' })
            res.json({ token })
        }
    } catch (err) {
        console.log(err.message);
        res.sendStatus(503)
    }
    finally {
        console.log('Register request completed')
    }
})

router.post('/login', (req, res) => {
    const { username, password } = req.body
    console.log(`username: ${username}, password: ${password}`)
    try {
        //prepare query to check if the username is valid
        const getUser = db.prepare('SELECT id, password from users where username = ?')
        //execute select query
        let user = getUser.get(username)
        console.log(user)

        if (!user) {
            res.status(401).json({ message: 'Invalid user' })
        }

        //validate password
        const isPwdValid = bcrypt.compareSync(password, user.password)

        if (!isPwdValid) {
            res.status(401).json({ message: 'Invalid password' })
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, { expiresIn: '24h' })
        res.status(200).json({ message: 'username successfully authenticated', token })

    } catch (err) {
        console.log(err.message);
        res.sendStatus(503)
    }
    finally {
        console.log('login request completed')
    }
})

export default router

