const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const sculptureCtrl = require('../controllers/sculpture');

router.get('/', sculptureCtrl.getAllSculptures);
router.post('/', multer, sculptureCtrl.createSculpture);
router.get('/:id', sculptureCtrl.getOneSculpture);
router.put('/:id', multer, sculptureCtrl.modifySculpture);
router.delete('/:id', sculptureCtrl.deleteSculpture);
router.post('/:id/like', sculptureCtrl.likestatus);

module.exports = router;