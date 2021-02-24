'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.addColumn('tools', 'id_user', {
			type: Sequelize.INTEGER,
			references: { model: 'users', key: 'id' },
			onUpdate: 'CASCADE',
			onDelete: 'SET NULL',
			allowNull: true
		});
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.removeColumn(
			'tools',
			'id_user'
		);
	}
};
