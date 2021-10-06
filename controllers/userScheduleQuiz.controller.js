module.exports = {
  index(_req, res, _next) {
    return res.json('view all user Schedule Quizzes');
  },

  show(_req, res, _next) {
    return res.json('get user Schedule Quizzes by id');
  },

  store(_req, res, _next) {
    return res.json('store user Schedule Quizzes records');
  },

  update(_req, res, _next) {
    return res.json('update user Schedule Quizzes records');
  },

  delete(_req, res, _next) {
    return res.json('delete user Schedule Quizzes records');
  },
};
