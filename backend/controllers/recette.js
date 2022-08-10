const Recipe = require("../models/Recipe")
const fs = require('fs');

exports.createRecipe = (req, res) => {
  const recipeObject = JSON.parse(req.body.recipe);
  delete recipeObject._id;
  const recipe = new Recipe({
    ...recipeObject,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
    likes: 0,
    dislikes: 0,
    usersLiked: [''],
    usersdisLiked: [''],
  });
  recipe.save()
    .then(() => res.status(201).json({ message: 'Recipe enregistré !'}))
    .catch(error => res.status(400).json({ error }));
};
  
exports.modifyRecipe = (req, res) => {
  const recipeObject = req.file ?
    {
      ...JSON.parse(req.body.recipe),
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
  Recipe.updateOne({ _id: req.params.id }, { ...recipeObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Recipe modifié !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.deleteRecipe = (req, res) => {
  Recipe.findOne({ _id: req.params.id })
    .then(recipe => {
      const filename = recipe.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Recipe.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Recipe supprimé !'}))
          .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => res.status(500).json({ error })
  );
};

exports.getOneRecipe = (req, res) => {
  Recipe.findOne({_id: req.params.id})
  .then(recipe => res.status(200).json(recipe))
  .catch(error => res.status(404).json({ error }));
}

exports.getAllRecipes = (req, res) => {
  Recipe.find()
    .then(recipe => res.status(200).json(recipe))
    .catch(error => res.status(400).json({ error }));
}

exports.likeDislikeRecipe = (req, res) => {
  const like = req.body.like
  const userId = req.body.userId
  const recipeId = req.params.id
  
  switch (like) {
    case 1 :
      Recipe.updateOne({ _id: recipeId }, { $push: { usersLiked: userId }, $inc: { likes: +1 }})
        .then(() => res.status(200).json({ message: `J'aime` }))
        .catch((error) => res.status(400).json({ error }))  
    break;

    case 0 :
      Recipe.findOne({ _id: recipeId })
          .then((recipe) => {
          if (recipe.usersLiked.includes(userId)) { 
            Recipe.updateOne({ _id: recipeId }, { $pull: { usersLiked: userId }, $inc: { likes: -1 }})
              .then(() => res.status(200).json({ message: `Neutre` }))
              .catch((error) => res.status(400).json({ error }))
          }
          if (recipe.usersDisliked.includes(userId)) { 
            Recipe.updateOne({ _id: recipeId }, { $pull: { usersDisliked: userId }, $inc: { dislikes: -1 }})
              .then(() => res.status(200).json({ message: `Neutre` }))
              .catch((error) => res.status(400).json({ error }))
          }
        })
        .catch((error) => res.status(404).json({ error }))
    break;

    case -1 :
      Recipe.updateOne({ _id: recipeId }, { $push: { usersDisliked: userId }, $inc: { dislikes: +1 }})
        .then(() => { res.status(200).json({ message: `Je n'aime pas` }) })
        .catch((error) => res.status(400).json({ error }))
    break;
      
    default:
      console.log(error);
  }
}
