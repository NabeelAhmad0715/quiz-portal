module.exports = {
  index(_req, res, _next) {
    return res.json('view all student Quiz Attempt Responses');
  },

  show(_req, res, _next) {
    return res.json('get student Quiz Attempt Responses by id');
  },

  store(_req, res, _next) {
    return res.json('store student Quiz Attempt Responses records');
  },

  update(_req, res, _next) {
    return res.json('update student Quiz Attempt Responses records');
  },

  delete(_req, res, _next) {
    return res.json('delete student Quiz Attempt Responses records');
  },
};
