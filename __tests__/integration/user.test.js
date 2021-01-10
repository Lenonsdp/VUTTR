import request from 'supertest';
import app from '../../src/app';

describe('Users', () => {
	it('Create user', async () => {
		const response = await request(app)
			.post('/users')
			.send({
				name: 'Lenon',
				email: 'lenonsdp@hotmail.com',
				password: '123456',
			});
		expect(response.body).toHaveProperty('id', 'name', 'email');
	});
});

describe('Authentication', () => {
	it('Create session', async () => {
		const response = await request(app)
			.post('/sessions')
			.send({
				email: 'lenonsdp@hotmail.com',
				password: '123456',
			});
		expect(response.body).toHaveProperty('token');
	});
});
