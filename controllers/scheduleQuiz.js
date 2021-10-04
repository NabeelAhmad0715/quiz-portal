module.exports = {
  index(req, res) {
    return res.json('view all schedule quizzes');
  },

  show(req, res) {
    return res.json('get schedule quiz by id');
  },

  store(req, res) {
    return res.json('store schedule quiz records');
  },

  update(req, res) {
    return res.json('update schedule quiz records');
  },

  delete(req, res) {
    return res.json('delete schedule quiz records');
  },
};
