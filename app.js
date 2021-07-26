const express = require('express')                     
// const bodyParser = require('body-parser')               
const mongodbServer = require('./src/db-connect/connect-db')

const app = express()

// define json use express method 
app.use(express.json())

// initialization port 
const PORT = process.env.PORT || 3000

// initialization db server
mongodbServer()






        // testing & exposing server port.
app.listen(PORT, (req, res) => {
  console.log(`Server on at port ${PORT}`);
})