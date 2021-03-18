const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const baseDonnee = require('./environementSample');

const creationsRoutes = require('./routes/creations');
const sculptureRoutes = require('./routes/sculpture');
const lampeRoutes = require('./routes/lampe');
const othercreationRoutes = require('./routes/othercreation');
const bijouRoutes = require('./routes/bijou.js');

const userRoutes = require('./routes/user');
const path = require('path');


mongoose.connect('mongodb+srv://' + baseDonnee.userName + ':' + baseDonnee.pwdAtlas + '@cluster0.i2v09.mongodb.net/Cluster0?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

 
const app = express();

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/api/creations', creationsRoutes);
app.use('/api/sculptures', sculptureRoutes);
app.use('/api/lampes', lampeRoutes);
app.use('/api/othercreation', othercreationRoutes);
app.use('/api/bijoux', bijouRoutes);

app.use('/api/auth', userRoutes);


module.exports = app;