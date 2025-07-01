
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET || 'segredo';

module.exports = (req, res, next) => {
    const token = req.cookies.jwt;
    if (!token) return res.sendStatus(403);
    try {
        const decoded = jwt.verify(token, SECRET);
        req.userId = decoded.id;
        next();
    } catch {
        res.sendStatus(403);
    }
};
