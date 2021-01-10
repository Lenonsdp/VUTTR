require('dotenv').config({
	path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env'
});

module.exports = {
	dialect: process.env.DB_DIALECT || 'postgres',
	host: process.env.HOST,
	username: process.env.NAME,
	password: process.env.PASSWORD,
	database: '',
	storage: './__tests__/database.sqlite',
	define: {
		timestamp: true,
		underscored: true,
		underscoredAll: true
	}
};
