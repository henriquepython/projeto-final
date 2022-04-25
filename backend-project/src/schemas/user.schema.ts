import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  email: String,
  password: {
    type: String,
    select: false,
  },
  name: String,
  phoneNumber: String,
  created: { type: Date, default: Date.now },
});
