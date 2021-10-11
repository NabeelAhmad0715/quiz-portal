const { QuestionBank } = require('../models');
const { Option } = require('../models');
const { Question } = require('../models');

const index = async (req, res, _next) => {
  try {
    const questions = await Question.findAll(
      { where: { question_bank_id: req.body.question_bank_id } },
      {
        tableName: 'question',
        include: [
          {
            model: QuestionBank,
            as: 'question_banks',
          },
          {
            model: Option,
            as: 'options',
          },
        ],
        order: [
          ['createdAt', 'DESC'],
          [{ model: QuestionBank, as: 'question_banks' }, 'createdAt', 'DESC'],
          [{ model: Option, as: 'options' }, 'createdAt', 'DESC'],
        ],
      },
    );
    return res.status(200).json(questions);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const show = async (req, res, _next) => {
  try {
    const question = await Question.findByPk(req.body.id, {
      include: [
        {
          model: QuestionBank,
          as: 'question_banks',
        },
        {
          model: Option,
          as: 'options',
        },
      ],
      order: [
        ['createdAt', 'DESC'],
        [{ model: QuestionBank, as: 'question_banks' }, 'createdAt', 'DESC'],
        [{ model: Option, as: 'options' }, 'createdAt', 'DESC'],
      ],
    });
    if (!question) {
      return res.status(404).json({
        message: 'Question Not Found',
      });
    }
    return res.status(200).json(question);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const store = async (req, res, _next) => {
  try {
    const {
      description,
      tags,
      marks,
      question_bank_id: questionBankId,
    } = req.body;
    const question = await Question.create({
      question: req.body.question,
      description,
      tags,
      marks,
      questionBankId,
    });
    return res.status(200).json(question);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const update = async (req, res, _next) => {
  try {
    const question = await Question.findByPk(req.body.id, {
      include: [
        {
          model: QuestionBank,
          as: 'question_banks',
        },
        {
          model: Option,
          as: 'options',
        },
      ],
      order: [
        ['createdAt', 'DESC'],
        [{ model: QuestionBank, as: 'question_banks' }, 'createdAt', 'DESC'],
        [{ model: Option, as: 'options' }, 'createdAt', 'DESC'],
      ],
    });
    if (!question) {
      return res.status(404).json({
        message: 'Question Not Found',
      });
    }
    await question.update({
      question: req.body.question || question.question,
      description: req.body.description || question.description,
      tags: req.body.tags || question.tags,
      marks: req.body.marks || question.marks,
      question_bank_id: req.body.question_bank_id || question.question_bank_id,
    });
    return res.status(200).json(question);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const destroy = async (req, res, _next) => {
  try {
    const question = await Question.findByPk(req.body.id);
    if (!question) {
      return res.status(404).json({
        message: 'Question Not Found',
      });
    }
    await question.destroy();
    return res.status(200).json({ message: 'Question Deleted Successfully' });
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
