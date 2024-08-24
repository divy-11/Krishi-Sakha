const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Admin:jZEOL6CqWnapaRou@cluster0.g8cch4b.mongodb.net/Farmer")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));


const userList = new mongoose.Schema({
    name: String,
    phone: Number,
    state: String,
    city: String,
    password: String,
});


const Users = mongoose.model('users', userList);
module.exports = { Users }