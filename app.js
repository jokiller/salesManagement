const express = require('express')                     
// const bodyParser = require('body-parser')               
const mongodbServer = require('./src/db-connect/connect-db')

    // imports Products routes
const addProduct = require('./src/routes/products/add_products')
const deleteProduct = require('./src/routes/products/delete_product')
const deleteManyProducts = require('./src/routes/products/deleteMany_products')
const deleteTypoBarcode = require('./src/routes/products/deleteTypo_barcode_product')
const displayAllProducts = require('./src/routes/products/displayAll_products')
const displaySelectedProduct = require('./src/routes/products/displaySelected_product')
const scanCodeProduct = require('./src/routes/products/scan_product')
const updateProduct = require('./src/routes/products/update_product')


const app = express()

// define json use express method 
app.use(express.json())

// initialization port 
const PORT = process.env.PORT || 3000

// initialization db server
mongodbServer()

app.use('/product', addProduct)
app.use('/product', deleteProduct)
app.use('/product', deleteManyProducts)
app.use('/product', deleteTypoBarcode)
app.use('/product', displayAllProducts)
app.use('/product', displaySelectedProduct)
app.use('/product', scanCodeProduct)
app.use('/product', updateProduct)




        // testing & exposing server port.
app.listen(PORT, (req, res) => {
  console.log(`Server on at port ${PORT}`);
})