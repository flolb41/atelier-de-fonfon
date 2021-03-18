const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const creationsCtrl = require('../controllers/creations');

router.get('/', creationsCtrl.getAllCreations);
router.post('/', multer, creationsCtrl.createCreations);
router.get('/:id', creationsCtrl.getOneCreations);
router.put('/:id', multer, creationsCtrl.modifyCreations);
router.delete('/:id', creationsCtrl.deleteCreations);
router.post('/:id/like', creationsCtrl.likestatus);

module.exports = router;