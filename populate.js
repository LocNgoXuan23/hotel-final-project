require('dotenv').config()

const connectDB = require('./db/connect')
const Product = require('./models/Product')

const jsonProducts = require('./mockData/products.json')

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    await Product.deleteMany()
    await Product.create(jsonProducts)
    console.log('Success!!!!')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()
