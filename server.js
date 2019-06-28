const express = require('express')
const cors = require('cors')
const app = express()
const port = 9000

app.use(cors())
app.use(express.json())

app.post('/users', function(req, res){
    res.status(201).json({})
})

app.listen(port, function(){
    console.log(`app listening port ${port}!`);
});