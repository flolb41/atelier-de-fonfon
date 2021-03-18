const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const bijouCtrl = require('../controllers/bijou');

router.get('/', bijouCtrl.getAllBijoux);
router.post('/', multer, bijouCtrl.createBijou);
router.get('/:id', bijouCtrl.getOneBijou);
router.put('/:id', multer, bijouCtrl.modifyBijou);
router.delete('/:id', bijouCtrl.deleteBijou);
router.post('/:id/like', bijouCtrl.likestatus);

module.exports = router;