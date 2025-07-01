# API Plataforma de Cursos - Projeto FullStack

Este projeto foi desenvolvido como parte da disciplina de Desenvolvimento FullStack, utilizando o padrão MVC e tecnologias modernas de backend.

## 🚀 Tecnologias Utilizadas
- Node.js
- Express
- Prisma ORM
- PostgreSQL (banco hospedado no Railway)
- JWT para autenticação
- Bcrypt para criptografia de senhas
- Cookies para controle de login

## 📁 Estrutura do Projeto
```
src/
├── controllers/  # Lógica das funcionalidades
├── middlewares/  # Autenticação JWT
├── routes/       # Arquivos de rotas organizados
├── app.js        # Configuração do Express
└── server.js     # Inicialização do servidor
prisma/
└── schema.prisma # Modelos do banco
```

## ⚙️ Como Executar o Projeto
1. Clone o repositório:
```
git clone https://github.com/Castelhano30/api-plataforma-cursos-mvc.git
```

2. Instale as dependências:
```
npm install
```

3. Crie um arquivo `.env` na raiz seguindo o modelo:
```
DATABASE_URL=postgresql://usuario:senha@host:porta/banco
JWT_SECRET=sua_chave_secreta
PORT=3000
```

4. Gere o Prisma Client:
```
npx prisma generate
```

5. Rode as migrations para criar as tabelas no banco:
```
npx prisma migrate dev
```

6. Inicie o servidor:
```
npm start
```

## ✅ Funcionalidades
- Cadastro de Aluno
- Login com JWT via cookie
- Listagem de Cursos
- Inscrição e cancelamento de inscrição
- Visualização dos cursos inscritos

## 💻 Observações
Este projeto foi desenvolvido seguindo as boas práticas de MVC e as orientações da disciplina. Está pronto para testes e validação.
