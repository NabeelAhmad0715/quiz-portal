module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('student_quiz_attempt_responses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      student_quiz_attempt_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      question_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      option_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      is_correct: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      obtained_marks: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('student_quiz_attempt_responses');
  },
};
