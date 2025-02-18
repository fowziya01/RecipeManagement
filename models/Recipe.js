// models/Recipe.js
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    ingredients: { type: [String], required: true },
    steps: { type: [String], required: true },
    imageUrl: { type: String, required: true },
    visibility: { type: String, enum: ['public', 'private'], default: 'public' },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
