module.exports = {
  index(_req, res, _next) {
    return res.json('view all options');
  },

  show(_req, res, _next) {
    return res.json('get option by id');
  },

  store(_req, res, _next) {
    return res.json('store option records');
  },

  update(_req, res, _next) {
    return res.json('update option records');
  },

  delete(_req, res, _next) {
    return res.json('delete option records');
  },
};
