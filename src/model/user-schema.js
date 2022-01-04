import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    // minlength: [3, "please enter atleast 3 word"],
  },
  email: {
    type: String,
    // unique: true,
  },
  phone: {
    type: Number,
    // unique: true,
  },
});
const User = mongoose.model("user", userSchema);

export default User;
