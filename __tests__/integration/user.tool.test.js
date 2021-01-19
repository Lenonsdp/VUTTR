import request from 'supertest';
import app from '../../src/app';
var token = '';
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
			token = response.body.token;
		expect(response.body).toHaveProperty('token');
	});
});

describe('Update', () => {
	it('Update user fail validation schema', async () => {
		const response = await request(app)
			.post('/users')
			.set('Authorization', `Bearer `+ token)
			.send({
				name: 'Lenon',
				email: 'lenonsdp@hotmail.com',
				oldPassword: '123456',
				password: '654321',
			});
		expect(response.status).toBe(400);
	});
});

//--------------------Tools test------------------------------
describe('Tools', () => {
	it('Create Tool with token invalid', async () => {
		const response = await request(app)
			.post('/tools')
			.send({
				title: "hotel",
				link: "https://github.com/typicode/hotel",
				description: "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
				tags: ["node", "organizing", "webapps", "domain", "developer", "https", "proxy"]
			});
		expect(response.status).toBe(401);
	});
});

describe('Tools', () => {
	it('Create Tool with token invalid', async () => {
		const response = await request(app)
			.post('/tools')
			.send({
				title: "hotel",
				link: "https://github.com/typicode/hotel",
				description: "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
				tags: ["node", "organizing", "webapps", "domain", "developer", "https", "proxy"]
			});
		expect(response.status).toBe(401);
	});
});

describe('Tools', () => {
	it('Create Tool with token valid', async () => {
		const response = await request(app)
			.post('/tools')
			.set('Authorization', `Bearer `+ token)
			.send({
				title: "hotel",
				link: "https://github.com/typicode/hotel",
				description: "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
				tags: ["node", "organizing", "webapps", "domain", "developer", "https", "proxy"]
			});
		expect(response.status).toBe(201)
	});
});

describe('Tools', () => {
	it('Get tools', async () => {
		const response = await request(app)
			.get('/tools')
			.set('Authorization', `Bearer `+ token);
		expect(response.status).toBe(200)
	});
});

describe('Tools', () => {
	it('Get tools by tag', async () => {
		const response = await request(app)
			.get('/tools/node')
			.set('Authorization', `Bearer `+ token);
		expect(response.status).toBe(200)
	});
});

describe('Tools', () => {
	it('Delete tools by id', async () => {
		const response = await request(app)
			.delete('/tools/1')
			.set('Authorization', `Bearer `+ token);
		expect(response.status).toBe(204)
	});
});

describe('Update', () => {
	it('Update user', async () => {
		const response = await request(app)
			.put('/users')
			.set('Authorization', `Bearer `+ token)
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
