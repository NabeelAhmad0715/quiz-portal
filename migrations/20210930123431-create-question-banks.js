module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('question_banks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      teacher_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          // Required field
          model: 'teachers',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('question_banks');
  },
};
