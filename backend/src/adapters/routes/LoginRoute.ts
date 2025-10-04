import { Router } from 'express';

const loginRouter = Router();

loginRouter.post('/login', (req, res) => {
	const { username, password } = req.body;

	if (username === 'admin' && password === 'password') {
		return res.status(200).json({ message: 'Login successful' });
	}

	return res.status(401).json({ message: 'Invalid credentials' });
});

export default loginRouter;