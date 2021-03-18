const Bijou = require('../models/Bijou');
const fs = require('fs');
const bijou = require('../models/Bijou');


exports.createBijou = (req, res, next) => {
  const bijouObject = JSON.parse(req.body.bijou);
  const bijou = new Bijou({ 
    ...bijouObject,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
    likes: 0,
    dislikes : 0
  });
  userId = req.body._id;
  bijou.save()
    .then(() => res.status(201).json({ message: 'Création ajoutée !'}))
    .catch(error => res.status(400).json({ error }));
};


exports.modifyBijou = (req, res, next) => {
  const bijouObject = req.file ?
    {
      ...JSON.parse(req.body.bijou),
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
  Bijou.updateOne({ _id: req.params.id }, { ...bijouObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Bijou modifié !'}))
    .catch(error => res.status(400).json({ error }));
};


exports.deleteBijou = (req, res, next) => {
  Bijou.findOne({ _id: req.params.id })
    .then(bijou => {
      const filename = bijou.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Bijou.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Bijou supprimé !'}))
          .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => res.status(500).json({ error }));
};


  exports.getOneBijou = (req, res, next) => {
    Bijou.findOne({ _id: req.params.id })  
      .then(bijou => res.status(200).json(bijou))
      .catch(error => res.status(404).json({ error })); 
};


exports.getAllBijoux = (req, res, next) => {
    Bijou.find()
    .then(bijou => res.status(200).json(bijou))
    .catch(error => res.status(400).json({ error }));
  };
  

exports.likestatus = (req, res, next) => {
  likes = 0;
  dislikes = 0;
  const userId = req.body.userId; 
  const reqLike = req.body.like;
  const bijouId = req.params.id;
    Bijou.findOne({_id: bijouId}) 
      .then((bijou) => {
          bijou.usersLiked = bijou.usersLiked.filter(item => item !== userId);
          bijou.usersDisliked = bijou.usersDisliked.filter(item => item !== userId);
          if (reqLike === 1) {bijou.usersLiked.push(userId)};
          if (reqLike === -1) {bijou.usersDisliked.push(userId)};
          bijou.likes = bijou.usersLiked.length;
          bijou.dislikes = bijou.usersDisliked.length;
          bijou.save()
            .then(() => res.status(200).json({ message: 'Bijou Sauvegardé !'}))
            .catch(error => res.status(400).json({ message : 'Bijou non sauvegardé !' }));
      })
      .catch(error => res.status(500).json({ message : 'Problème base de donnée !' }));
};