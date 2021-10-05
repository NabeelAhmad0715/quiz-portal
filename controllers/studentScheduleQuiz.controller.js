module.exports = {
  index(_req, res, _next) {
    return res.json('view all student Schedule Quizzes');
  },

  show(_req, res, _next) {
    return res.json('get student Schedule Quizzes by id');
  },

  store(_req, res, _next) {
    return res.json('store student Schedule Quizzes records');
  },

  update(_req, res, _next) {
    return res.json('update student Schedule Quizzes records');
  },

  delete(_req, res, _next) {
    return res.json('delete student Schedule Quizzes records');
  },
};
