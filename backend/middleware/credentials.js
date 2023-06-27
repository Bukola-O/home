import allowedOrigins from "../config/allowedOrigins.js";

const credentials = (req, res, next) => {
	const origin = req.headers.origin;
	if (allowedOrigins.includes(origin)) {
		res.header('Access-Control_Allow-Credentials', true);
	}
	next();
}

export default credentials;