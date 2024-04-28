import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    orderedItem: [{
        productName: String,
        price: Number,
        quantity: Number,
        imageUrl: String,
    }],
    status: { type: String, enum: ['pending', 'cancelled', 'completed'] },
    deliveryMethod: { type: String, enum: ['free', 'express'] },
    deliveryComment: String,
    deliveryCost: Number,
    paymentMethod: String,
    totalAmountPaid: Number,
    receiverFirstName: String,
    receiverLastName: String,
    deliveryAddress: {
        address: { type: String },
        city: { type: String },
        postalCode: { type: Number },
        state: { type: String },
        country: { type: String },
    }
})

export default mongoose.model('Order', OrderSchema)