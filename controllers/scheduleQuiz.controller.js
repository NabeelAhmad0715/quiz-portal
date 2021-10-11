const { QuestionBank } = require('../models');
const { User } = require('../models');
const { ScheduleQuiz } = require('../models');

const index = async (_req, res, _next) => {
  try {
    const scheduleQuizzes = await ScheduleQuiz.findAll({
      tableName: 'schedule_quizzes',
      include: [
        {
          model: User,
          as: 'users',
        },
        {
          model: QuestionBank,
          as: 'question_banks',
        },
      ],
      order: [
        ['createdAt', 'DESC'],
        [{ model: User, as: 'users' }, 'createdAt', 'DESC'],
        [{ model: QuestionBank, as: 'question_banks' }, 'createdAt', 'DESC'],
      ],
    });
    return res.status(200).json(scheduleQuizzes);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const show = async (req, res, _next) => {
  try {
    const scheduleQuiz = await ScheduleQuiz.findByPk(req.body.id, {
      include: [
        {
          model: User,
          as: 'users',
        },
        {
          model: QuestionBank,
          as: 'question_banks',
        },
      ],
      order: [
        ['createdAt', 'DESC'],
        [{ model: User, as: 'users' }, 'createdAt', 'DESC'],
        [{ model: QuestionBank, as: 'question_banks' }, 'createdAt', 'DESC'],
      ],
    });
    if (!scheduleQuiz) {
      return res.status(404).json({
        message: 'Schedule Quiz Not Found',
      });
    }
    return res.status(200).json(scheduleQuiz);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const store = async (req, res, _next) => {
  try {
    const {
      start_dateTime: startDateTime,
      end_dateTime: endDateTime,
      question_bank_id: questionBankId,
      user_id: userId,
    } = await req.body;
    const scheduleQuiz = await ScheduleQuiz.create({
      startDateTime,
      endDateTime,
      questionBankId,
      userId,
    });
    return res.status(200).json(scheduleQuiz);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const update = async (req, res, _next) => {
  try {
    const scheduleQuiz = await ScheduleQuiz.findByPk(req.body.id, {
      include: [
        {
          model: User,
          as: 'users',
        },
        {
          model: QuestionBank,
          as: 'question_banks',
        },
      ],
      order: [
        ['createdAt', 'DESC'],
        [{ model: User, as: 'users' }, 'createdAt', 'DESC'],
        [{ model: QuestionBank, as: 'question_banks' }, 'createdAt', 'DESC'],
      ],
    });
    if (!scheduleQuiz) {
      return res.status(404).json({
        message: 'Schedule Quiz Not Found',
      });
    }
    await scheduleQuiz.update({
      start_dateTime: req.body.start_dateTime || scheduleQuiz.start_dateTime,
      end_dateTime: req.body.end_dateTime || scheduleQuiz.end_dateTime,
      question_bank_id:
        req.body.question_bank_id || scheduleQuiz.question_bank_id,
      user_id: req.body.user_id || scheduleQuiz.user_id,
    });
    return res.status(200).json(scheduleQuiz);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const destroy = async (req, res, _next) => {
  try {
    const scheduleQuiz = await ScheduleQuiz.findByPk(req.body.id);
    if (!scheduleQuiz) {
      return res.status(404).json({
        message: 'Schedule Quiz Not Found',
      });
    }
    await scheduleQuiz.destroy();
    return res
      .status(200)
      .json({ message: 'Schedule Quiz Deleted Successfully' });
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
