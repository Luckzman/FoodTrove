import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: { type: String, require: true },
    shortDesc: String,
    description: String,
    price: Number,
    image: String,
    brand: String,
    information: String,
    dietType: String,
    flavour: String,
    category: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
    tag: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag'}]
}, { timestamps: true });

export default mongoose.model('Product', ProductSchema)