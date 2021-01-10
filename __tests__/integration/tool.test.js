import request from 'supertest';
import app from '../../src/app';

describe('Tools', () => {
	it('Create Tool', async () => {
		const response = await request(app)
			.post('/tools')
			.set('Authorization', `Bearer ${token}`)
			.send({
				title: "hotel",
				link: "https://github.com/typicode/hotel",
				description: "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
				tags: ["node", "organizing", "webapps", "domain", "developer", "https", "proxy"]
			});
		expect(response.body).toHaveProperty('id', 'link', 'title', 'description', 'tags');
	});
});

describe('Tools', () => {
	it('Create Tool', async () => {
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