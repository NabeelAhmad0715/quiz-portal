module.exports = {
  index(_req, res, _next) {
    return res.json('view all question banks');
  },

  show(_req, res, _next) {
    return res.json('get question bank by id');
  },

  store(_req, res, _next) {
    return res.json('store question bank records');
  },

  update(_req, res, _next) {
    return res.json('update question bank records');
  },

  delete(_req, res, _next) {
    return res.json('delete question bank records');
  },
};
