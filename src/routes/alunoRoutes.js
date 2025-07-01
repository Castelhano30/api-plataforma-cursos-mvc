
const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController');

router.post('/usuarios', alunoController.cadastrar);
router.post('/login', alunoController.login);

module.exports = router;
