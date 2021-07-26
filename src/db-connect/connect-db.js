const mongoose = require('mongoose')

const connectionUri = 'mongodb://127.0.0.1:27017/salesManagement'

// Create a connection between back-end and database mongoose
const mongodbServer = async () => {
  try {
    await mongoose.connect(connectionUri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
      })
    console.log('connection established');
  } catch(e) {
    console.log(e + 'Connexion Error')
  }
}

module.exports = mongodbServer