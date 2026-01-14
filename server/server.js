const express = require('express') 
const app = express() 
const PORT = 3000
app.use(express.json())

app.post('/', (req, res) => {
    const { username, email, password } = req.body
    console.log(username, email, password)
    res.send('Hello for the backend')
})

app.listen(PORT, () =>{
    console.log('Server listening')
})