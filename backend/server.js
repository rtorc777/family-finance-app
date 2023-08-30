const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({msg: 'Hello'})
})


app.listen(4000, () =>{
    console.log('Listening on Port 4000')
})