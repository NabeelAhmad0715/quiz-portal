const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class StudentQuizAttempts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      StudentQuizAttempts.hasMany(models.StudentQuizAttemptResponses, {
        foreignKey: 'student_quiz_attempt_id',
        as: 'student_quiz_attempts',
      });
    }
  }
  StudentQuizAttempts.init(
    {
      student_id: DataTypes.INTEGER,
      quiz_id: DataTypes.INTEGER,
      obtained_marks: DataTypes.INTEGER,
      has_passed: DataTypes.BOOLEAN,
      is_finished: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'StudentQuizAttempts',
    },
  );
  return StudentQuizAttempts;
};
