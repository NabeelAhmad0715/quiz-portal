module.exports = {
  index(_req, res, _next) {
    return res.json('view all teachers');
  },

  show(_req, res, _next) {
    return res.json('get teacher by id');
  },

  store(_req, res, _next) {
    return res.json('store teacher records');
  },

  update(_req, res, _next) {
    return res.json('update teacher records');
  },

  delete(_req, res, _next) {
    return res.json('delete teacher records');
  },
};
