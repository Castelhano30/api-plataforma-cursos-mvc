
# API Plataforma de Cursos - Projeto FullStack 

Este projeto foi desenvolvido como parte da disciplina de Desenvolvimento FullStack, seguindo o padrão MVC e com o Backend pronto para execução.

## 🚀 Tecnologias Utilizadas
- Node.js
- Express
- Prisma ORM
- PostgreSQL (hospedado no Railway)
- JWT para autenticação
- Bcrypt para criptografia de senhas
- Cookies para controle de login

## ⚙️ Como Executar o Projeto

**O projeto já está configurado para rodar direto, sem necessidade de ajustes.**

### Passos:

1. Clonar o repositório:
```
git clone https://github.com/Castelhano30/api-plataforma-cursos-mvc.git
```

2. Navegar até a pasta do projeto:
```
cd api-plataforma-cursos-mvc
```

3. Instalar as dependências:
```
npm install
```

4. Gerar o Prisma Client:
```
npx prisma generate
```

5. Criar as tabelas no banco (opcional, o banco já está configurado no Railway):
```
npx prisma migrate dev
```

6. Iniciar o servidor:
```
npm start
```

O servidor irá rodar na porta `3000` conforme o `.env`.

## ✅ Funcionalidades Disponíveis
- Cadastro de Aluno
- Login com JWT via cookie
- Listagem de Cursos
- Inscrição e cancelamento de inscrição
- Visualização dos cursos inscritos

## 💻 Observações
- O `.env` já está pronto e configurado para o banco no Railway
- O projeto foi testado e está funcionando

