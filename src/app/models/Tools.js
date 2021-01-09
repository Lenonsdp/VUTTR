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
				description: Sequelize.STRING,
				tags: {
					type: Sequelize.TEXT,
					get: function () {
						return JSON.parse(this.getDataValue("tags"));
					},
					set: function (value) {
						return this.setDataValue("tags", JSON.stringify(value));
					}
				}
			},
			{
				sequelize
			}
		);
		return this;
	}
}

export default Tools;
