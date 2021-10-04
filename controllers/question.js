module.exports = {
  index(_req, res, next) {
    return res.json('view all questions');
  },

  show(req, res, next) {
    return res.json('get question by id');
  },

  store(req, res) {
    return res.json('store question records');
  },

  update(req, res) {
    return res.json('update question records');
  },

  delete(req, res) {
    return res.json('delete question records');
  },
};
