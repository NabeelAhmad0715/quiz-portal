const { User, UserQuizAttempt } = require('../models');

const index = async (_req, res, _next) => {
  try {
    const userQuizAttempts = await UserQuizAttempt.findAll({
      tableName: 'user_quiz_attempts',
      include: [
        {
          model: User,
          as: 'users',
        },
      ],
      order: [
        ['createdAt', 'DESC'],
        [{ model: User, as: 'users' }, 'createdAt', 'DESC'],
      ],
    });
    return res.status(200).json(userQuizAttempts);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const show = async (req, res, _next) => {
  try {
    const userQuizAttempt = await UserQuizAttempt.findByPk(req.body.id, {
      include: [
        {
          model: User,
          as: 'users',
        },
      ],
      order: [
        ['createdAt', 'DESC'],
        [{ model: User, as: 'users' }, 'createdAt', 'DESC'],
      ],
    });
    if (!userQuizAttempt) {
      return res.status(404).json({
        message: 'User Quiz Attempt Not Found',
      });
    }
    return res.status(200).json(userQuizAttempt);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const store = async (req, res, _next) => {
  try {
    const {
      quiz_id: quizId,
      user_id: userId,
      obtained_marks: obtainedMarks,
      has_passed: hasPassed,
      is_finished: isFinished,
    } = req.body;
    const attempt = await UserQuizAttempt.create({
      quizId,
      userId,
      obtainedMarks,
      hasPassed,
      isFinished,
    });
    return res.status(200).json(attempt);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};

const update = async (req, res, _next) => {
  try {
    const userQuizAttempt = await UserQuizAttempt.findByPk(req.body.id, {
      include: [
        {
          model: User,
          as: 'users',
        },
      ],
      order: [
        ['createdAt', 'DESC'],
        [{ model: User, as: 'users' }, 'createdAt', 'DESC'],
      ],
    });
    if (!userQuizAttempt) {
      return res.status(404).json({
        message: 'User Quiz Attempt Not Found',
      });
    }
    await UserQuizAttempt.update({
      quiz_id: req.body.quiz_id || userQuizAttempt.quiz_id,
      user_id: req.body.user_id || userQuizAttempt.user_id,
      obtained_marks: req.body.obtained_marks || userQuizAttempt.obtained_marks,
      has_passed: req.body.has_passed || userQuizAttempt.has_passed,
      is_finished: req.body.is_finished || userQuizAttempt.is_finished,
    });
    return res.status(200).json(userQuizAttempt);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const destroy = async (req, res, _next) => {
  try {
    const userQuizAttempt = await UserQuizAttempt.findByPk(req.body.id);
    if (!userQuizAttempt) {
      return res.status(404).json({
        message: 'User Quiz Attempt Not Found',
      });
    }
    await userQuizAttempt.destroy();
    return res
      .status(200)
      .json({ message: 'User Quiz Attempt Deleted Successfully' });
  } catch (err) {
    return res.status(400).json(err);
  }
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
