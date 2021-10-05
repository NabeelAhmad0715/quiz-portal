module.exports = {
  index(_req, res, _next) {
    return res.json('view all student Quiz Attempts');
  },

  show(_req, res, _next) {
    return res.json('get student Quiz Attempts by id');
  },

  store(_req, res, _next) {
    return res.json('store student Quiz Attempts records');
  },

  update(_req, res, _next) {
    return res.json('update student Quiz Attempts records');
  },

  delete(_req, res, _next) {
    return res.json('delete student Quiz Attempts records');
  },
};
