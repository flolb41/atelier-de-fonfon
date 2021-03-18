const Creations = require('../models/Creations');
const fs = require('fs');

exports.createCreations = (req, res, next) => {
  const creationsObject = JSON.parse(req.body.creations);
  const creations = new Creations({ 
    ...creationsObject,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
    likes: 0,
    dislikes : 0
  });
  userId = req.body._id;
  creations.save()
    .then(() => res.status(201).json({ message: 'Creations ajoutée !'}))
    .catch(error => res.status(400).json({ error }));
};


exports.modifyCreations = (req, res, next) => {
  const creationsObject = req.file ?
    {
      ...JSON.parse(req.body.creations),
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
  Creations.updateOne({ _id: req.params.id }, { ...creationsObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Creations modifié !'}))
    .catch(error => res.status(400).json({ error }));
};


exports.deleteCreations = (req, res, next) => {
  Creations.findOne({ _id: req.params.id })
    .then(creations => {
      const filename = creations.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Creations.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Creations supprimée !'}))
          .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => res.status(500).json({ error }));
};


  exports.getOneCreations = (req, res, next) => {
    Creations.findOne({ _id: req.params.id })  
      .then(creations => res.status(200).json(creations))
      .catch(error => res.status(404).json({ error })); 
};


exports.getAllCreations = (req, res, next) => {
    Creations.find()
    .then(creations => res.status(200).json(creations))
    .catch(error => res.status(400).json({ error }));
  };
  

exports.likestatus = (req, res, next) => {
  likes = 0;
  dislikes = 0;
  const userId = req.body.userId; 
  const reqLike = req.body.like;
  const creationsId = req.params.id;
    Creations.findOne({_id: creationsId}) 
      .then((creations) => {
          creations.usersLiked = creations.usersLiked.filter(item => item !== userId);
          creations.usersDisliked = creations.usersDisliked.filter(item => item !== userId);
          if (reqLike === 1) {creations.usersLiked.push(userId)};
          if (reqLike === -1) {creations.usersDisliked.push(userId)};
          creations.likes = creations.usersLiked.length;
          creations.dislikes = creations.usersDisliked.length;
          creations.save()
            .then(() => res.status(200).json({ message: 'Creations Sauvegardé !'}))
            .catch(error => res.status(400).json({ message : 'Creations non sauvegardé !' }));
      })
      .catch(error => res.status(500).json({ message : 'Problème base de donnée !' }));
};