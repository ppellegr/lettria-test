import mongoose from 'mongoose';

const authorModel = mongoose.Schema({
  name: {
   type: String,
   required: '{PATH} is required!'
  },
  messages: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Message' }
  ]
}, {
  timestamps: true
});

module.exports = mongoose.model('Author', authorModel);
