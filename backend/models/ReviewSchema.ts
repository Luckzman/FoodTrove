import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    user: { type: mongoose.Types.ObjectId, ref: 'User' },
    product: { type: mongoose.Types.ObjectId, ref: 'Product' },
    reviewText: { type: String, required: true },
    rating: { type: Number, required: true, min: 0, max: 5, default: 0 }
}, { timestamps: true })

export default mongoose.model('Review', ReviewSchema);