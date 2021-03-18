const Sculpture = require('../models/Sculpture');
const fs = require('fs');
const sculpture = require('../models/Sculpture');


exports.createSculpture = (req, res, next) => {
  const sculptureObject = JSON.parse(req.body.sculpture);
  const sculpture = new Sculpture({ 
    ...sculptureObject,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
    likes: 0,
    dislikes : 0
  });
  userId = req.body._id;
  sculpture.save()
    .then(() => res.status(201).json({ message: 'Création ajoutée !'}))
    .catch(error => res.status(400).json({ error }));
};


exports.modifySculpture = (req, res, next) => {
  const sculptureObject = req.file ?
    {
      ...JSON.parse(req.body.sculpture),
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
  Sculpture.updateOne({ _id: req.params.id }, { ...sculptureObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Création modifiée !'}))
    .catch(error => res.status(400).json({ error }));
};


exports.deleteSculpture = (req, res, next) => {
  Sculpture.findOne({ _id: req.params.id })
    .then(sculpture => {
      const filename = sculpture.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Sculpture.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Création supprimée !'}))
          .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => res.status(500).json({ error }));
};


  exports.getOneSculpture = (req, res, next) => {
    Sculpture.findOne({ _id: req.params.id })  
      .then(sculpture => res.status(200).json(sculpture))
      .catch(error => res.status(404).json({ error })); 
};


exports.getAllSculptures = (req, res, next) => {
    Sculpture.find()
    .then(sculpture => res.status(200).json(sculpture))
    .catch(error => res.status(400).json({ error }));
  };
  

exports.likestatus = (req, res, next) => {
  likes = 0;
  dislikes = 0;
  const userId = req.body.userId; 
  const reqLike = req.body.like;
  const sculptureId = req.params.id;
    Sculpture.findOne({_id: sculptureId}) 
      .then((sculpture) => {
          sculpture.usersLiked = sculpture.usersLiked.filter(item => item !== userId);
          sculpture.usersDisliked = sculpture.usersDisliked.filter(item => item !== userId);
          if (reqLike === 1) {sculpture.usersLiked.push(userId)};
          if (reqLike === -1) {sculpture.usersDisliked.push(userId)};
          sculpture.likes = sculpture.usersLiked.length;
          sculpture.dislikes = sculpture.usersDisliked.length;
          sculpture.save()
            .then(() => res.status(200).json({ message: 'Création Sauvegardée !'}))
            .catch(error => res.status(400).json({ message : 'Création non sauvegardée !' }));
      })
      .catch(error => res.status(500).json({ message : 'Problème base de donnée !' }));
};