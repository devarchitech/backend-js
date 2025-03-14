import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import chalk from 'chalk'
import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoRoutes.js'
import authMiddleware from './middleware/authMiddleware.js'

//DECLARATIONS
const app = express()
const port = process.env.port || 5000

// get the file path from the url of the current module
const __filepath = fileURLToPath(import.meta.url)
//get the directory name from the file path
const __dirname = dirname(__filepath)

//MIDDLEWARE
app.use(express.json())
//serves the html file from the public directory
//also tells express to serve all files from the public folder as static assets /files
//serving up the HTML file from the public folder
app.use(express.static(path.join(__dirname, '../public')))

//ROUTES
app.use ('/auth',authRoutes)
app.use ('/todos',authMiddleware ,todoRoutes)

//ENDPOINTS
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
    console.log("The text is displayed in Green")

})

//EXPRESS WEB SERVER START
app.listen(port, () => console.log(chalk.underline.overline.italic.bold.cyanBright(`server has started at port: ${port}`)))
 

