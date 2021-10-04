const express = require('express');
const studentRoute = require('./student');
const teacherRoute = require('./teacher');
const adminRoute = require('./admin');
const questionBankRoute = require('./questionBank');
const questionRoute = require('./question');
const optionRoute = require('./option');
const scheduleQuizRoute = require('./scheduleQuiz');
const docsRoute = require('./docs');
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
    path: '/api/question-banks',
    route: questionBankRoute,
  },
  {
    path: '/api/questions',
    route: questionRoute,
  },
  {
    path: '/api/options',
    route: optionRoute,
  },
  {
    path: '/api/schedule-quizzes',
    route: scheduleQuizRoute,
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

/* istanbul ignore next */
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
