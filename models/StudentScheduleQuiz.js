const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class StudentScheduleQuiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  StudentScheduleQuiz.init(
    {
      student_id: DataTypes.INTEGER,
      schedule_quiz_id: DataTypes.INTEGER,
    },
    { timestamps: false },
    {
      sequelize,
      modelName: 'StudentScheduleQuiz',
    },
  );
  return StudentScheduleQuiz;
};
