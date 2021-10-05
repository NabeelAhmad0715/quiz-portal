const student = require('./student.controller');
const teacher = require('./teacher.controller');
const admin = require('./admin.controller');
const questionBank = require('./questionBank.controller');
const question = require('./question.controller');
const option = require('./option.controller');
const scheduleQuiz = require('./scheduleQuiz.controller');
const studentScheduleQuiz = require('./studentScheduleQuiz.controller');
const studentQuizAttempt = require('./studentQuizAttempt.controller');
const studentQuizAttemptResponse = require('./studentQuizAttemptResponse.controller');

module.exports = {
  student,
  teacher,
  admin,
  questionBank,
  question,
  option,
  scheduleQuiz,
  studentScheduleQuiz,
  studentQuizAttempt,
  studentQuizAttemptResponse,
};
