
const express = require('express');
const router = express.Router();
const alunoRoutes = require('./alunoRoutes');

router.use(alunoRoutes);

module.exports = router;
