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

describe('Users', () => {
	it('Create user fail validation schema', async () => {
		const response = await request(app)
			.post('/users')
			.send({
				name: 'Lenon',
				email: '',
				password: '',
			});
		expect(response.status).toBe(400);
	});
});

describe('Users', () => {
	it('Create user fail user exists', async () => {
		const response = await request(app)
			.post('/users')
			.send({
				name: 'Lenon',
				email: 'lenonsdp@hotmail.com',
				password: '123456',
			});
		expect(response.status).toBe(400);
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

describe('Update', () => {
	it('Update user', async () => {
		const response = await request(app)
			.put('/users')
			.set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjEwMjgyMzIwfQ.JE_y9rBfdtpXvGzN2hMcsM42o53ls-D5Lgn9KxUwXNw`)
			.send({
				name: 'Lenon',
				email: 'lenonsdp@hotmail.com',
				oldPassword: '123456',
				password: '654321',
				confirmPassword: '654321',
			});
		expect(response.body).toHaveProperty('id', 'name', 'email');
	});
});

describe('Update', () => {
	it('Update user fail validation schema', async () => {
		const response = await request(app)
			.post('/users')
			.set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjEwMjgyMzIwfQ.JE_y9rBfdtpXvGzN2hMcsM42o53ls-D5Lgn9KxUwXNw`)
			.send({
				name: 'Lenon',
				email: 'lenonsdp@hotmail.com',
				oldPassword: '123456',
				password: '654321',
			});
		expect(response.status).toBe(400);
	});
});