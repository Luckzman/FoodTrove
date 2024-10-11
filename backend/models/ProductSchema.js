import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: { type: String, require: true },
    description: String,
    price: { type: Number, required: true, min: 0},
    category: { type: String, lowercase: true },
    image: String,
    rating: {
        rate: Number,
        count: Number
    },
    fullDesc: String,
    features: [String],
    sku: String,
    productLine: String,
    stock: Number,
    rating: Number,
    review: { type: mongoose.Types.ObjectId, ref: 'Review' },
});

export default mongoose.model('Product', ProductSchema)