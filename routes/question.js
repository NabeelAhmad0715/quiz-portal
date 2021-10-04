const express = require('express');

const router = express.Router();
const QuestionController = require('../controllers').question;

/* Student Router */
router.get('/', QuestionController.index);
router.get('/:id', QuestionController.show);
router.post('/', QuestionController.store);
router.put('/:id', QuestionController.update);
router.delete('/:id', QuestionController.delete);
module.exports = router;
