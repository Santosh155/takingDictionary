const { verify } = require('jsonwebtoken');

const protect = async (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) return res.status(401).send({ message: 'Access Denied' });
    try {
        const verified = verify(token, process.env.TOKEN_SECRET);
        req.userData = verified;
        next();
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

module.exports = protect;
