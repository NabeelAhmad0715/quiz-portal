module.exports = {
  index(_req, res, _next) {
    return res.json('view all user Quiz Attempts');
  },

  show(_req, res, _next) {
    return res.json('get user Quiz Attempts by id');
  },

  store(_req, res, _next) {
    return res.json('store user Quiz Attempts records');
  },

  update(_req, res, _next) {
    return res.json('update user Quiz Attempts records');
  },

  delete(_req, res, _next) {
    return res.json('delete user Quiz Attempts records');
  },
};
