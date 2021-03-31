const API_URL = process.env.API_URL;

export default async function handler(req, res) {
	const response = await fetch(API_URL, {
		body: JSON.stringify(req.body),
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'POST'
	});
	res.status(200).json(response.body);
}
