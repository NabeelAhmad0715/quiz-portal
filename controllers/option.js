module.exports = {
  index(req, res) {
    return res.json('view all options');
  },

  show(req, res) {
    return res.json('get option by id');
  },

  store(req, res) {
    return res.json('store option records');
  },

  update(req, res) {
    return res.json('update option records');
  },

  delete(req, res) {
    return res.json('delete option records');
  },
};
