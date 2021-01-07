import Sequelize, { Model } from 'sequelize';

class Tools extends Model {
	static init(sequelize) {
		super.init(
			{
				id: {
					type: Sequelize.INTEGER,
					primaryKey: true,
					autoIncrement: true
				},
				link: Sequelize.STRING,
				title: Sequelize.STRING,
				description: Sequelize.STRING
			},
			{
				sequelize
			}
		);

		return this;
	}
}

export default Tools;
