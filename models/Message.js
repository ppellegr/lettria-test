import mongoose from 'mongoose';
const messageModel = mongoose.Schema({
  title: {
    type: String,
    required: '{PATH} is required!'
  },
  content: {
    type: String
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: true
  }
}, {
  timestamps: true
});
module.exports = mongoose.model('Message', messageModel);
