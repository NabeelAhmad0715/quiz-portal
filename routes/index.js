const express = require('express');
const studentRoute = require('./student.route');
const teacherRoute = require('./teacher.route');
const adminRoute = require('./admin.route');
const questionBankRoute = require('./questionBank.route');
const questionRoute = require('./question.route');
const optionRoute = require('./option.route');
const scheduleQuizRoute = require('./scheduleQuiz.route');
const studentScheduleQuizRoute = require('./studentScheduleQuiz.route');
const studentQuizAttemptRoute = require('./studentQuizAttempt.route');
const studentQuizAttemptResponseRoute = require('./studentQuizAttemptResponse.route');
const docsRoute = require('./docs.route');
const config = require('../config/config.json');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/api/students',
    route: studentRoute,
  },
  {
    path: '/api/teachers',
    route: teacherRoute,
  },
  {
    path: '/api/admins',
    route: adminRoute,
  },
  {
    path: '/api/teacher/{teacher}/question-banks',
    route: questionBankRoute,
  },
  {
    path: '/api/question-banks/{questionBank}/questions',
    route: questionRoute,
  },
  {
    path: '/api/question-banks/{questionBank}/questions/{question}/options',
    route: optionRoute,
  },
  {
    path: '/api/schedule-quizzes',
    route: scheduleQuizRoute,
  },
  {
    path: '/api/student-schedule-quizzes',
    route: studentScheduleQuizRoute,
  },
  {
    path: '/api/student-quiz-attempts',
    route: studentQuizAttemptRoute,
  },
  {
    path: '/api/student-quiz-attempt-responses',
    route: studentQuizAttemptResponseRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/api/swagger',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

if (config.env_development === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

router.get('/', (req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' });
  res.end(
    `<h1 style="text-align:center">Welcome to InvoZone NodeJS Training Session ${config.env_development} Mode</h1>`,
  );
});
module.exports = router;
