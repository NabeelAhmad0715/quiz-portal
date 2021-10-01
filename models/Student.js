const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Student.belongsToMany(models.ScheduleQuiz, {
        through: 'StudentScheduleQuiz',
        as: 'schedule_quizzes',
        foreignKey: 'student_id',
      });

      Student.hasMany(models.StudentQuizAttempts, {
        foreignKey: 'student_id',
        as: 'student_quiz_attempts',
      });
    }
  }
  Student.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Student',
    },
  );
  return Student;
};
