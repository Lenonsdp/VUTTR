module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('tools_tags', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true
			},
			id_tool: {
				type: Sequelize.INTEGER,
				references: {
					model: 'tools',
					key: 'id'
				},
				onDelete: 'CASCADE',
				allowNull: false,
			},
			tag: {
				type: Sequelize.STRING,
				allowNull: false
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('tools_tags');
	}
};