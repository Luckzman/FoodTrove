import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'

const UserSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    phone: { type: Number },
    phoneCode: { type: Number},
    userType: { type: String, enum: ['registered', 'guest'], default: 'guest' },
    deliveryAddress: [{
        address: { type: mongoose.Types.ObjectId, ref: 'Address' },
        isDefault: { type: Boolean }
    }]
}, { timestamps: true })

// UserSchema.pre('save', function(next) {
//     let user = this;
//     if(!user.isModified('password')) return next();
//     if(user){
//         bcrypt.genSalt(10, function(err, salt) {
//             if(err) return next(err);
//             bcrypt.hash(user.password, salt, function(err, hash) {
//                 if(err) return next(err);
//                 user.password = hash;
//                 next()
//             })
//         })
//     }
// })

UserSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

export default mongoose.model('User', UserSchema)