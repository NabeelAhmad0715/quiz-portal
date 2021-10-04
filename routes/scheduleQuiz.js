const express = require('express');

const router = express.Router();
const ScheduleQuizController = require('../controllers').scheduleQuiz;

/* Student Router */
router.get('/', ScheduleQuizController.index);
router.get('/:id', ScheduleQuizController.show);
router.post('/', ScheduleQuizController.store);
router.put('/:id', ScheduleQuizController.update);
router.delete('/:id', ScheduleQuizController.delete);
module.exports = router;
