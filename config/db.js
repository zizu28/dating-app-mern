import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            "mongodb+srv://ziblimzulkazz:Zz0$Zz6$0638@dating-app-mern.uzqwa.mongodb.net/?retryWrites=true&w=majority&appName=Dating-App-Mern"
        );
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export default connectDB