import User from '../models/UserSchema.js'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'

const generateToken = (user) => {
    return jwt.sign({id: user.id}, process.env.JWT_SECRET_KEY, { expiresIn: '1d' })
}

export const register = async (req, res) => {
    const { firstname, lastname, email, password, phone, phoneCode } = req.body
    try {
        let user = null;
        let hashPassword = '';

        // check if user already exist
        user = await User.findOne({ email });
        // return a response if user already exsit
        if (user) return res.status(400).json({ message: 'User already exist' })

        // if not user, create a password hash and store data in the database
        if(password) {
            const salt = await bcrypt.genSalt(10);
            hashPassword = await bcrypt.hash(password, salt)
        }

        const newUser = {
            firstname,
            lastname,
            email: email.toLowerCase(),
            password: hashPassword,
            phone, 
            phoneCode,
            userType: password ? 'registered' : 'guest'
        }
        user = new User(newUser)
        await user.save()
        res.status(200).json({ success: true, message: 'User successfully created' })
    } catch (error) {
        res.status(500).json({ success: true, message: 'Internal server error, Try again'})
    }
}

export const login = async (req, res) => {
    const { email } = req.body
    try {
        let user = null;

        user = await User.findOne({ email: email.toLowerCase() })


        if (!user) return res.status(404).json({ success: false, message: 'User not found' })
        if (!user.userType === 'guest') return res.status(404).json({ success: false, message: 'User not duly registered' })

        // if user exist, compare the user password and the hashedpassword from db
        const isPasswordMatch = bcrypt.compare(req.body.password, user.password);
        if(!isPasswordMatch) return res.status(400).json({ success: false, message: 'Invalid Credentials' })
            // if the credential is correct, we generate a jwt access token to allow user access other resources
        const token = generateToken(user)

        const { password, ...rest } = user.toJSON()

        return res.status(200).json({
            status: true,
            message: 'Successfully login',
            token,
            data: rest
        })

        
    } catch (error) {
        console.log(error)
        return res.status(500).json({ status: false, message: 'Unable to login'})
    }
}

