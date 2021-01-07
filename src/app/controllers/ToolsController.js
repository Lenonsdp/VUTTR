import * as Yup from 'yup';
import Tools from '../models/Tools';
import ToolsTags from '../models/ToolsTags';

class ToolsController {
	async store(req, res) {
		const schema = Yup.object().shape({
			title: Yup.string().required(),
			link: Yup.string().required(),
			description: Yup.string().required()
		});

		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ error: 'Validation fails.' });
		}

		const { id, title, link, description } = await Tools.create(req.body);
		
		var tags = [];
		await req.body.tags.forEach(element => {
			ToolsTags.create({
				id_tool: id,
				tag: element
			});
			tags.push(element); 			
		});

		return res.json({
			title,
			link,
			description,
			id,
			tags
		});
	}
}

export default new ToolsController();
