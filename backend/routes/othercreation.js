const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const othercreationCtrl = require('../controllers/othercreation');

router.get('/', othercreationCtrl.getAllOthercreation);
router.post('/', multer, othercreationCtrl.createOthercreation);
router.get('/:id', othercreationCtrl.getOneOthercreation);
router.put('/:id', multer, othercreationCtrl.modifyOthercreation);
router.delete('/:id', othercreationCtrl.deleteOthercreation);
router.post('/:id/like', othercreationCtrl.likestatus);

module.exports = router;