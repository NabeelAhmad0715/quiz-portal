module.exports = {
  index(_req, res, _next) {
    return res.json('view all questions');
  },

  show(_req, res, _next) {
    return res.json('get question by id');
  },

  store(_req, res, _next) {
    return res.json('store question records');
  },

  update(_req, res, _next) {
    return res.json('update question records');
  },

  delete(_req, res, _next) {
    return res.json('delete question records');
  },
};
