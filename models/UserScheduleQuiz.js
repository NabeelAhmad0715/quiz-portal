const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserScheduleQuiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(_models) {
      // define association here
    }
  }
  UserScheduleQuiz.init(
    {
      user_id: DataTypes.INTEGER,
      schedule_quiz_id: DataTypes.INTEGER,
    },
    { timestamps: false },
    {
      sequelize,
      modelName: 'UserScheduleQuiz',
    },
  );
  return UserScheduleQuiz;
};
