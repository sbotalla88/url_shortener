const mongoose = require('mongoose');
const UrlSchema = mongoose.Schema(
  {
    long: {
      type: String,
      required: true,
      trim: true,
    },
    short: {
        type: String,
        required: true,
        trim: true,
      },
      shortId: {
        type: String,
        required: true,
        trim: true,
      },
    
  },
  {
    timestamps: true,
  }
);


const Url = mongoose.model('Url', UrlSchema);

module.exports = Url;