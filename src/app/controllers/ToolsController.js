import * as Yup from 'yup';
import Tools from '../models/Tools';

import { Op } from 'sequelize';

class ToolsController {
	async store(req, res) {
		const schema = Yup.object().shape({
			title: Yup.string().required(),
			link: Yup.string().required(),
			description: Yup.string().required(),
			tags: Yup.array().required()
		});

		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ error: 'Validation fails.' });
		}
		req.body.id_user = req.userId;
		const { id, title, link, description, tags } = await Tools.create(req.body, { 'id_user': req.userId });

		return res.status(201).json({
			title,
			link,
			description,
			id,
			tags
		});
	}

	async index(req, res) {
		const { page = 1 } = req.query;
		const tools = await Tools.findAll({
			order: ['id'],
			attributes: ['id', 'title', 'link', 'description', 'tags'],
			limit: 20,
			offset: (page - 1) * 20,
			where: {
				id_user: req.userId
			}
		});

		return res.json(tools);
	}

	async show(req, res) {
		const { page = 1 } = req.query;
		const tools = await Tools.findAll({
			order: ['id'],
			attributes: ['id', 'title', 'link', 'description', 'tags'],
			limit: 20,
			offset: (page - 1) * 20,
			where: {
				tags: { [Op.substring]: req.params.tag },
				id_user: req.userId
			}
		});
		return res.json(tools);
	}

	async delete(req, res) {
		const tool = await Tools.findOne(
			{
				where: {
					id: req.params.id,
					id_user: req.userId
				}
			}
		);
		if (tool) {
			await Tools.destroy({
				where: {
					id: req.params.id
				}
			});

			return res.status(204).json({ msg: 'No Content.' });
		} else {
			return res.status(404).json({ error: 'Tool not found.' });
		}
	}
}

export default new ToolsController();
