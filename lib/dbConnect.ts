import mongoose from "mongoose";

async function dbConnect(){
    try {
        await mongoose.connect(process.env.MONGODB_URI!)
    } catch (error) {
        throw new Error('Database Connection Failed')
    }
}
export default dbConnect