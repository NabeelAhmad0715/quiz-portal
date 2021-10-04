const express = require('express');

const router = express.Router();
const AdminController = require('../controllers').admin;

/* Admin Router */
router.get('/', AdminController.index);
router.get('/:id', AdminController.show);
router.post('/', AdminController.store);
router.put('/:id', AdminController.update);
router.delete('/:id', AdminController.delete);
module.exports = router;
