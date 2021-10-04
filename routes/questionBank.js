const express = require('express');

const router = express.Router();
const QuestionBankController = require('../controllers').questionBank;

/* Student Router */
router.get('/', QuestionBankController.index);
router.get('/:id', QuestionBankController.show);
router.post('/', QuestionBankController.store);
router.put('/:id', QuestionBankController.update);
router.delete('/:id', QuestionBankController.delete);
module.exports = router;
