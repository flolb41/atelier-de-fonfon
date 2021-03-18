const Lampe = require('../models/Lampe');
const fs = require('fs');
const lampe = require('../models/Lampe');


exports.createLampe = (req, res, next) => {
  const lampeObject = JSON.parse(req.body.lampe);
  const lampe = new Lampe({ 
    ...lampeObject,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
    likes: 0,
    dislikes : 0
  });
  userId = req.body._id;
  lampe.save()
    .then(() => res.status(201).json({ message: 'Création ajoutée !'}))
    .catch(error => res.status(400).json({ error }));
};


exports.modifyLampe = (req, res, next) => {
  const lampeObject = req.file ?
    {
      ...JSON.parse(req.body.lampe),
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
  Lampe.updateOne({ _id: req.params.id }, { ...lampeObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Création modifiée !'}))
    .catch(error => res.status(400).json({ error }));
};


exports.deleteLampe = (req, res, next) => {
  Lampe.findOne({ _id: req.params.id })
    .then(lampe => {
      const filename = lampe.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Lampe.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Création supprimée !'}))
          .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => res.status(500).json({ error }));
};


  exports.getOneLampe = (req, res, next) => {
    Lampe.findOne({ _id: req.params.id })  
      .then(lampe => res.status(200).json(lampe))
      .catch(error => res.status(404).json({ error })); 
};


exports.getAllLampes = (req, res, next) => {
    Lampe.find()
    .then(lampe => res.status(200).json(lampe))
    .catch(error => res.status(400).json({ error }));
  };
  

exports.likestatus = (req, res, next) => {
  likes = 0;
  dislikes = 0;
  const userId = req.body.userId; 
  const reqLike = req.body.like;
  const lampeId = req.params.id;
    Lampe.findOne({_id: lampeId}) 
      .then((lampe) => {
          lampe.usersLiked = lampe.usersLiked.filter(item => item !== userId);
          lampe.usersDisliked = lampe.usersDisliked.filter(item => item !== userId);
          if (reqLike === 1) {lampe.usersLiked.push(userId)};
          if (reqLike === -1) {lampe.usersDisliked.push(userId)};
          lampe.likes = lampe.usersLiked.length;
          lampe.dislikes = lampe.usersDisliked.length;
          lampe.save()
            .then(() => res.status(200).json({ message: 'Création Sauvegardée !'}))
            .catch(error => res.status(400).json({ message : 'Création non sauvegardée !' }));
      })
      .catch(error => res.status(500).json({ message : 'Problème base de donnée !' }));
};