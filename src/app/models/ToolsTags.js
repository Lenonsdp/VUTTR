import Sequelize, { Model } from 'sequelize';

class ToolsTags extends Model {
	static init(sequelize) {
		super.init(
			{
				id: {
					type: Sequelize.INTEGER,
					primaryKey: true,
					autoIncrement: true,
				},
				id_tool: Sequelize.INTEGER,
				tag: Sequelize.STRING
			},
			{
				sequelize
			}
		);

		return this;
	}
}

export default ToolsTags;
