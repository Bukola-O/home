import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

const connectDB  = async () => {
	try {
		await mongoose.connect("process.env.DATABASE_URI", {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});
	} catch (error) {
		console.error(error);
	}
}

export default connectDB;