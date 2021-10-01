module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('student_schedule_quizzes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      student_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          // Required field
          model: 'students',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      schedule_quiz_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          // Required field
          model: 'schedule_quizzes',
          key: 'id',
        },
        onDelete: 'cascade',
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('student_schedule_quizzes');
  },
};
