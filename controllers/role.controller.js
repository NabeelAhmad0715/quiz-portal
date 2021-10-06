module.exports = {
  index(_req, res, _next) {
    return res.json('view all roles');
  },

  show(_req, res, _next) {
    return res.json('get role by id');
  },

  store(_req, res, _next) {
    return res.json('store role records');
  },

  update(_req, res, _next) {
    return res.json('update role records');
  },

  delete(_req, res, _next) {
    return res.json('delete role records');
  },
};
