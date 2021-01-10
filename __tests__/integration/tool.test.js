import request from 'supertest';
import app from '../../src/app';

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
			.set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjEwMjgyMzIwfQ.JE_y9rBfdtpXvGzN2hMcsM42o53ls-D5Lgn9KxUwXNw`)
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
			.set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjEwMjgyMzIwfQ.JE_y9rBfdtpXvGzN2hMcsM42o53ls-D5Lgn9KxUwXNw`);
		expect(response.status).toBe(200)
	});
});

describe('Tools', () => {
	it('Get tools by tag', async () => {
		const response = await request(app)
			.get('/tools/node')
			.set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjEwMjgyMzIwfQ.JE_y9rBfdtpXvGzN2hMcsM42o53ls-D5Lgn9KxUwXNw`);
		expect(response.status).toBe(200)
	});
});

describe('Tools', () => {
	it('Delete tools by id', async () => {
		const response = await request(app)
			.delete('/tools/1')
			.set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjEwMjgyMzIwfQ.JE_y9rBfdtpXvGzN2hMcsM42o53ls-D5Lgn9KxUwXNw`);
		expect(response.status).toBe(204)
	});
});