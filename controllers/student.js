module.exports = {
  index(req, res) {
    return res.json('view all students');
  },

  show(req, res) {
    return res.json('get student by id');
  },

  store(req, res) {
    return res.json('store student records');
  },

  update(req, res) {
    return res.json('update student records');
  },

  delete(req, res) {
    return res.json('delete student records');
  },
};
