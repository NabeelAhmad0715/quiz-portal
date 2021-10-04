module.exports = {
  index(req, res) {
    return res.json('view all admins');
  },

  show(req, res) {
    return res.json('get admin by id');
  },

  store(req, res) {
    return res.json('store admin records');
  },

  update(req, res) {
    return res.json('update admin records');
  },

  delete(req, res) {
    return res.json('delete admin records');
  },
};
