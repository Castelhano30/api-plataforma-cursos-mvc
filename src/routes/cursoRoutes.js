
const express = require('express');
const router = express.Router();
const cursoController = require('../controllers/cursoController');
const auth = require('../middlewares/authMiddleware');

router.get('/cursos', cursoController.listar);
router.post('/cursos/:idCurso', auth, cursoController.inscrever);
router.delete('/cursos/:idCurso', auth, cursoController.cancelar);
router.get('/:idUsuario', auth, cursoController.listarInscricoes);

module.exports = router;
