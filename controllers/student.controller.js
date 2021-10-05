module.exports = {
  index(_req, res, _next) {
    return res.json('view all students');
  },

  show(_req, res, _next) {
    return res.json('get student by id');
  },

  store(_req, res, _next) {
    return res.json('store student records');
  },

  update(_req, res, _next) {
    return res.json('update student records');
  },

  delete(_req, res, _next) {
    return res.json('delete student records');
  },
};
