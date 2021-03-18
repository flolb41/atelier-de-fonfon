const Othercreation = require('../models/Othercreation');
const fs = require('fs');
const othercreation = require('../models/Othercreation');

exports.createOthercreation = (req, res, next) => {
  const othercreationObject = JSON.parse(req.body.othercreation);
  const othercreation = new Othercreation({ 
    ...othercreationObject,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
    likes: 0,
    dislikes : 0
  });
  userId = req.body._id;
  othercreation.save()
    .then(() => res.status(201).json({ message: 'Création ajoutée !'}))
    .catch(error => res.status(400).json({ error }));
};


exports.modifyOthercreation = (req, res, next) => {
  const othercreationObject = req.file ?
    {
      ...JSON.parse(req.body.othercreation),
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
  Othercreation.updateOne({ _id: req.params.id }, { ...othercreationObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Création modifiée !'}))
    .catch(error => res.status(400).json({ error }));
};


exports.deleteOthercreation = (req, res, next) => {
  Othercreation.findOne({ _id: req.params.id })
    .then(othercreation => {
      const filename = othercreation.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Othercreation.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Création supprimée !'}))
          .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => res.status(500).json({ error }));
};


  exports.getOneOthercreation = (req, res, next) => {
    Othercreation.findOne({ _id: req.params.id })  
      .then(othercreation => res.status(200).json(othercreation))
      .catch(error => res.status(404).json({ error })); 
};


exports.getAllOthercreation = (req, res, next) => {
    Othercreation.find()
    .then(othercreation => res.status(200).json(othercreation))
    .catch(error => res.status(400).json({ error }));
  };
  

exports.likestatus = (req, res, next) => {
  likes = 0;
  dislikes = 0;
  const userId = req.body.userId; 
  const reqLike = req.body.like;
  const othercreationId = req.params.id;
    Othercreation.findOne({_id: othercreationId}) 
      .then((othercreation) => {
          othercreation.usersLiked = othercreation.usersLiked.filter(item => item !== userId);
          othercreation.usersDisliked = othercreation.usersDisliked.filter(item => item !== userId);
          if (reqLike === 1) {othercreation.usersLiked.push(userId)};
          if (reqLike === -1) {othercreation.usersDisliked.push(userId)};
          othercreation.likes = othercreation.usersLiked.length;
          othercreation.dislikes = othercreation.usersDisliked.length;
          othercreation.save()
            .then(() => res.status(200).json({ message: 'Création Sauvegardée !'}))
            .catch(error => res.status(400).json({ message : 'Création non sauvegardée !' }));
      })
      .catch(error => res.status(500).json({ message : 'Problème base de donnée !' }));
};