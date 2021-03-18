const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const lampeCtrl = require('../controllers/lampe');

router.get('/', lampeCtrl.getAllLampes);
router.post('/', multer, lampeCtrl.createLampe);
router.get('/:id', lampeCtrl.getOneLampe);
router.put('/:id', multer, lampeCtrl.modifyLampe);
router.delete('/:id', lampeCtrl.deleteLampe);
router.post('/:id/like', lampeCtrl.likestatus);

module.exports = router;