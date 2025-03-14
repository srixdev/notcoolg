const mongoose = require("mongoose");

const DB_URI = "mongodb+srv://simikultrapassword12:<db_password>@projectforge.kjfpj.mongodb.net/?retryWrites=true&w=majority&appName=ProjectForge";

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ MongoDB Connection Error:", err));
