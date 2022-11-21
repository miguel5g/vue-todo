# Vue Todo App

Aplicação fullstack de todo list

![Home Page](/.github/assets/app.png)

## :test_tube: Techs

Tecnologias e ferramentas que foram utilizadas para desenvolver este projeto:

- [NodeJs](https://nodejs.org/)
- [Express](https://expressjs.com/pt-br/)
- [SWC](https://swc.rs/)
- [TypeScript](https://typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [Vue](https://vuejs.org/)
- [TailwindCSS](https://tailwindcss.com/)

## :books: Instalação

Passo a passo para rodar a aplicação no seu computador.

1. Clonar repositório:

```bash
git clone https://github.com/miguel5g/vue-todo.git
cd vue-todo
```

2. Instalar dependências:

```bash
npm install # Pasta server
npm install # Pasta web
```

3. Configurar variáveis de ambiente

```bash
cp .env.example .env # Pasta server
```

4. Rodar as migrations

```bash
npx prisma migrate deploy # Pasta server
```

5. Executar projeto

```bash
npm run start:dev # Pasta server
npm run start:dev # Pasta web
```
