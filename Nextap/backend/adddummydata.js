const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// MongoDB Connection URI
const MONGO_URI = "mongodb+srv://parkarar:jB44lCrZK5WAr5Wh@profile.u3s1j.mongodb.net/?retryWrites=true&w=majority&appName=profile";

// Profile Schema
const ProfileSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  phone: String,
  cardNo: String,
  accNo: String,
});

const Profile = mongoose.model("Profile", ProfileSchema);

const addDummyData = async () => {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("MongoDB connected!");

    const hashedPassword = await bcrypt.hash("password123", 10);

    const dummyData = new Profile({
      email: "p@admin.com",
      password: hashedPassword,
      name: "Arslan P",
      phone: "+876097567",
      cardNo: "2234 5678 9012",
      accNo: "000123456799",
    });

    await dummyData.save();
    console.log("Dummy data inserted!");
  } catch (err) {
    console.error("Error inserting data:", err.message);
  } finally {
    mongoose.connection.close();
  }
};

addDummyData();