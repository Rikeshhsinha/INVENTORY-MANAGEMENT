import bycrypt from 'bcryptjs';
import User from './models/User.js';
import Post from './models/Post.js';
import connectDB from './db/connection.js';


const resister = async () => {
    try {
        await connectDB();
        const hashpassword = await bycrypt.hash("admin", 10);
        const newUser =new User({
            name:"Admin",
            email:"admin@gmail.com",
            password:hashpassword,
            role:"admin"
        })

        await newUser.save();
        console.log("Admin user created successfully");
    } catch (error) {
        console.log("Error creating admin user:", error);
    }   

}


resister();