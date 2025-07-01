
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET || 'segredo';

exports.cadastrar = async (req, res) => {
    const { nome, email, senha, nascimento } = req.body;
    if (!nome || !email || !senha || !nascimento) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
    }
    const existe = await prisma.aluno.findUnique({ where: { email } });
    if (existe) return res.status(400).json({ mensagem: 'Email já cadastrado' });
    const hash = await bcrypt.hash(senha, 10);
    await prisma.aluno.create({ data: { nome, email, senha: hash, nascimento: new Date(nascimento.split('/').reverse().join('-')) } });
    res.sendStatus(200);
};

exports.login = async (req, res) => {
    const { email, senha } = req.body;
    const aluno = await prisma.aluno.findUnique({ where: { email } });
    if (!aluno) return res.status(400).json({ mensagem: 'Credenciais inválidas' });
    const valida = await bcrypt.compare(senha, aluno.senha);
    if (!valida) return res.status(400).json({ mensagem: 'Credenciais inválidas' });
    const token = jwt.sign({ id: aluno.id }, SECRET, { expiresIn: '1d' });
    res.cookie('jwt', token, { httpOnly: true });
    res.sendStatus(200);
};
