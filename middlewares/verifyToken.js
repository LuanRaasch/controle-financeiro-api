const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).send('Token não fornecido.');

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) return res.status(500).send('Falha na autenticação do Token.');
        req.userId = decoded.id;
        next();
    });
};

module.exports = verifyToken;