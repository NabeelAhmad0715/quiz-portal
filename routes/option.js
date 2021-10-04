const express = require('express');

const router = express.Router();
const OptionController = require('../controllers').option;

/* Student Router */
router.get('/', OptionController.index);
router.get('/:id', OptionController.show);
router.post('/', OptionController.store);
router.put('/:id', OptionController.update);
router.delete('/:id', OptionController.delete);
module.exports = router;
