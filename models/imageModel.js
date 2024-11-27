const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  
    prompt: { type: String, required: true },  
    imageUrl: { type: String, required: true }, 
    generatedAt: { type: Date, default: Date.now },  
});

module.exports = mongoose.model('Image', imageSchema);
