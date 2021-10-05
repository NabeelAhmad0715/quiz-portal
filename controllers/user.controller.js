module.exports = {
  index(_req, res, _next) {
    return res.json('view all users');
  },

  show(_req, res, _next) {
    return res.json('get user by id');
  },

  store(_req, res, _next) {
    return res.json('store user records');
  },

  update(_req, res, _next) {
    return res.json('update user records');
  },

  delete(_req, res, _next) {
    return res.json('delete user records');
  },
};
