import mongoose from 'mongoose'
import { dbName } from '../constant.js';

const connectdb = async () =>{
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${dbName}`)
        console.log(`mongodb connected successfully on host || ${connection.connection.host}`);
    } catch (error) {
        console.log("mongodb db failed to connect", error);
        console.error(error)
    }
}

export default  connectdb;