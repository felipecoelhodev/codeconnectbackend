# Code Connect API 

A **Code Connect API** é uma interface backend robusta construída para gerenciar uma plataforma de blog e rede social para desenvolvedores. O projeto oferece funcionalidades completas de autenticação, publicação de posts e interações via comentários.

## Tecnologias Utilizadas

* **Framework:** [NestJS](https://nestjs.com/) (Node.js)
* **ORM:** [Prisma](https://www.prisma.io/)
* **Banco de Dados:** SQLite (padrão para desenvolvimento)
* **Segurança:** JWT (JSON Web Token) & BCrypt para hashing de senhas
* **Documentação:** Swagger (OpenAPI)
* **Validação:** Class-validator & Class-transformer

## Arquitetura do Banco de Dados

O banco de dados é composto por três entidades principais:

1.  **Users:** Gerenciamento de perfis, autenticação e avatares.
2.  **Posts:** Armazenamento de conteúdo, slugs para SEO, suporte a Markdown e sistema de likes.
3.  **Comments:** Interação entre usuários vinculada aos posts.

## Como Executar o Projeto

### Pré-requisitos
* Node.js (v18 ou superior)
* npm ou yarn

### Instalação
1. Clone o repositório:
```bash
git clone [https://github.com/seu-usuario/code-connect-api.git](https://github.com/seu-usuario/code-connect-api.git)
```

2. Instale as dependências:
```bash
npm install

```


3. Configure as variáveis de ambiente no arquivo `.env`:
```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="sua_chave_secreta"

```



### Banco de Dados e Seed

Execute as migrações e popule o banco com dados de teste:

```bash
npx prisma migrate dev --name init
npm run seed

```

### Inicialização

```bash
# Desenvolvimento
npm run start:dev

# Produção
npm run build
npm run start:prod

```

## Documentação da API

Após iniciar o servidor, a documentação interativa do Swagger estará disponível em:
`http://localhost:3000/api`

## Endpoints Principais

* `POST /auth/register`: Criação de novos usuários.
* `POST /auth/login`: Autenticação e geração de Token JWT.
* `GET /posts`: Listagem de conteúdos.
* `POST /comments/post/:postId`: Interação em posts (requer autenticação).
