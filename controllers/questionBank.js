module.exports = {
  index(req, res) {
    return res.json('view all question banks');
  },

  show(req, res) {
    return res.json('get question bank by id');
  },

  store(req, res) {
    return res.json('store question bank records');
  },

  update(req, res) {
    return res.json('update question bank records');
  },

  delete(req, res) {
    return res.json('delete question bank records');
  },
};
