const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema( {
  userId: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  calorie: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  note: { type: Number, required: true },
  likes: { type: Number, required: true },
  dislikes: { type: Number, required: true },
  usersLiked: { type: [String], required: true },
  usersDisliked: { type: [String], required: true },
});

module.exports = mongoose.model('Recipe', recipeSchema);
