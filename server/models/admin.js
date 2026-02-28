// // - username – String,
// // - email – String ( validate email if email is already registered or not)
// // - password – String (password Must be encrypted)
// // - confirm_password - String
// // - status – Boolean Data types
// // - created_date – String
// // - updated_date – String

// // User Model fields:
// // name
// // email
// // password (hashed)


// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// });

// export const UserCollection = mongoose.model('User', userSchema);


// const mongoose = require("mongoose");

// const adminSchema = new mongoose.Schema({
//   username: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   status: { type: Boolean, default: true },
//   created_date: { type: String },
//   updated_date: { type: String },
// });
 

// export const AdminCollection = mongoose.model("Admin", adminSchema);


import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  status: { type: Boolean, default: true },
  created_date: String,
  updated_date: String
});


export default mongoose.model("Admin",adminSchema)



