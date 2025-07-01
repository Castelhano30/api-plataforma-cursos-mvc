
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.listar = async (req, res) => {
    const cursos = await prisma.curso.findMany({ include: { inscricoes: true } });
    const resultado = cursos.map(c => ({
        id: c.id,
        nome: c.nome,
        descricao: c.descricao,
        capa: c.capa,
        inscricoes: c.inscricoes.filter(i => !i.cancelada).length,
        inicio: c.inicio.toLocaleDateString('pt-BR'),
        inscrito: false
    }));
    res.status(200).json(resultado);
};

exports.inscrever = async (req, res) => {
    const alunoId = req.userId;
    const cursoId = parseInt(req.params.idCurso);
    const ja = await prisma.inscricao.findFirst({ where: { alunoId, cursoId, cancelada: false } });
    if (ja) return res.status(400).json({ mensagem: 'Já inscrito no curso' });
    await prisma.inscricao.create({ data: { alunoId, cursoId } });
    res.sendStatus(200);
};

exports.cancelar = async (req, res) => {
    const alunoId = req.userId;
    const cursoId = parseInt(req.params.idCurso);
    const insc = await prisma.inscricao.findFirst({ where: { alunoId, cursoId, cancelada: false } });
    if (!insc) return res.sendStatus(404);
    await prisma.inscricao.update({ where: { id: insc.id }, data: { cancelada: true, dataCancelamento: new Date() } });
    res.sendStatus(200);
};

exports.listarInscricoes = async (req, res) => {
    const id = parseInt(req.params.idUsuario);
    if (id !== req.userId) return res.sendStatus(403);
    const inscricoes = await prisma.inscricao.findMany({ where: { alunoId: id }, include: { curso: true } });
    const resultado = inscricoes.map(i => ({
        id: i.curso.id,
        nome: i.curso.nome,
        descricao: i.curso.descricao,
        capa: i.curso.capa,
        inscricoes: 0,
        inicio: i.curso.inicio.toLocaleDateString('pt-BR'),
        inscricao_cancelada: i.cancelada,
        inscrito: !i.cancelada
    }));
    res.status(200).json(resultado);
};
