const express = require('express') 
const app = express()
const  cors = require('cors') 
const PORT = 8000
app.use(cors())
app.use(express.json())

app.post('/signup', (req, res) => {
    const { username, email, password } = req.body
    console.log("From the backend", username, email, password)
    res.send("This message is from the backend")
})

app.listen(PORT, () =>{
    console.log('Server listening')
})

