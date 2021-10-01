const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class StudentQuizAttemptResponses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      StudentQuizAttemptResponses.belongsTo(models.StudentQuizAttempts, {
        foreignKey: 'student_quiz_attempt_id',
        as: 'student_quiz_attempt_responses',
      });
    }
  }
  StudentQuizAttemptResponses.init(
    {
      student_quiz_attempt_id: DataTypes.INTEGER,
      question_id: DataTypes.INTEGER,
      option_id: DataTypes.INTEGER,
      is_correct: DataTypes.BOOLEAN,
      obtained_marks: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'StudentQuizAttemptResponses',
    },
  );
  return StudentQuizAttemptResponses;
};
