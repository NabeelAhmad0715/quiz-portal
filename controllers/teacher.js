module.exports = {
  index(req, res) {
    return res.json('view all teachers');
  },

  show(req, res) {
    return res.json('get teacher by id');
  },

  store(req, res) {
    return res.json('store teacher records');
  },

  update(req, res) {
    return res.json('update teacher records');
  },

  delete(req, res) {
    return res.json('delete teacher records');
  },
};
