module.exports = {
  index(_req, res, _next) {
    return res.json('view all schedule quizzes');
  },

  show(_req, res, _next) {
    return res.json('get schedule quiz by id');
  },

  store(_req, res, _next) {
    return res.json('store schedule quiz records');
  },

  update(_req, res, _next) {
    return res.json('update schedule quiz records');
  },

  delete(_req, res, _next) {
    return res.json('delete schedule quiz records');
  },
};
