module.exports = {
  index(_req, res, _next) {
    return res.json('view all admins');
  },

  show(_req, res, _next) {
    return res.json('get admin by id');
  },

  store(_req, res, _next) {
    return res.json('store admin records');
  },

  update(_req, res, _next) {
    return res.json('update admin records');
  },

  delete(_req, res, _next) {
    return res.json('delete admin records');
  },
};
