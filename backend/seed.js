import mongoose from "mongoose";
import ProductSchema from "./models/ProductSchema.js";
import { faker } from "@faker-js/faker";
import dotenv from 'dotenv';
import data from './seedData.js'

dotenv.config()

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('MongoDB connection open')
}).catch(err => {
    console.log(err)
})

const seedProduct = data.map(item => ({
    name: item.title,
    description: item.description,
    price: item.price,
    image: item.image,
    brand: faker.company.name(),
    features: faker.commerce.productAdjective(),
    fullDesc: faker.lorem.paragraphs(5),
    sku: faker.commerce.isbn(10),
    stock: faker.number.int({ max: 50 }),
    productLine: faker.commerce.productMaterial(),
    category: item.category,
    rating: item.rating.rate
}))

const seedDB = async () => {
    await ProductSchema.deleteMany({});
    await ProductSchema.insertMany(seedProduct)
}

seedDB().then(() => {
    mongoose.connection.close()
})