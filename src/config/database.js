require('dotenv').config()

module.exports = {
	dialect: 'postgres',
	host: process.env.HOST,
	username: process.env.NAME,
	password: process.env.PASSWORD,
	database: '',
	define: {
		timestamp: true,
		underscored: true,
		underscoredAll: true
	}
};
