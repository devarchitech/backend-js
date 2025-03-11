// the address of this server connected to the network is 
// http://localhost:8383
//IP -> 127.0.0.1:8383
const express = require('express')
const app = express()
const port = 8383

//HTTP VERBS (or method) and Routes (or path) > together called endpoints

//the method informs the nature of the request and the route is a further subdirectory (basically we direct the request to the body of code (callback function) to respond appropriately, and these locations or routes are called endpoints)
// app.get('/', (req, res) => {
//     //this is endpoint number 1 - /
//     console.log('yay I hit the home endpoint')
//     res.sendStatus('200')
// })

// app.get('/dashboard', (req,res) => {
//     console.log('Now the request has been directed to dashbpard endpoint')
//     res.send('Welcome to the dashboard')
// })

let jsonData = ["Praveen"]

//Middleware
app.use(express.json())


//Type 1 - website endpoints - returns HTML markup
app.get('/', (req, res) => {
    //this is endpoint number 1 - /
    res.send(`
        <body style="background-color:yellow;">
            <h1>DATA</h1>
            <p>${JSON.stringify(jsonData)}</p>
        </body>
        `)
})

app.get('/dashboard', (req,res) => {
    res.send('<h1>Welcome to Dashboard Page!!</h1>')
})


//Type 2 - API endpoints - returns JSON
app.get('/api/getHomeInfo', (req, res) => {
    //this is endpoint number 1 - /
    res.send(jsonData)
})

app.get('/api/getDashboardInfo', (req,res) => {
    res.send(jsonData)
})

//CRUD APIs

app.post('/api/data', (req, res) => {
    //verify authentication of the requesting user
    
    //verify authorization role
    
    //validata input data

    //process data
    const newData = req.body
    console.log(newData)
    jsonData.push(newData.name)
    res.sendStatus('201')
    
})

app.get('api/data/Id', (req, res) => {
    
})

app.put('api/data', (req, res) => {
    
})

app.delete('api/data/Id', (req, res) => {
    
})



app.listen(port, () => console.log(`server has started on ${port}`))