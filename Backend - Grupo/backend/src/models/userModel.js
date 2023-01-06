import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

//for create Table into DB for User
const UserSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true }, //only one email
        password: { type: String, required: true },
        address: { type: String, required: true },
        phone: { type: String, required: true },
        image: { type: String, required: true },
        isAdmin: { type: Boolean, default: false, required: true }
    },
    {
        timestamps: true //for date
    }
);
UserSchema.methods.encrypPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

const User = mongoose.model("User", UserSchema);
export default User;