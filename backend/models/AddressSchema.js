import mongoose from 'mongoose';

const  AddressSchema = new mongoose.Schema({
    address: { type: String },
    city: { type: String },
    postalCode: { type: Number },
    state: { type: String },
    country: { type: String },
}, { timestamps: true })

export default mongoose.model('Address', AddressSchema)