"# nlw-setup-habits" 


# Next Level Week - Setup Habits
## Projeto desenvolvido durante a Next Level Setup da Rocketseat realizado em junho de 2023.

## Tecnologias utilizadas

- NodeJS
- Fastify (Framework) 
- Typescript 


####
npm init -y
npm i fastify
npm install typescript -D
npx tsc --init -> Inicializar o typescript
Dentro do tsconfig.json alterar o target para "es2020"
npm i tsx -D
// Para rodar o projeto
npx tsc src/server.ts
criar script no package.json para rodar o projeto com o comando "npm run dev"
-> "dev": "tsx watch src/server.ts",

ORM - Prisma
npm i prisma -D
npm i @prisma/client
npx prisma init --datasource-provider SQLite 
------->>>>>> 
✔ Your Prisma schema was created at prisma/schema.prisma
  You can now open it in your favorite editor.

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Run prisma db pull to turn your database schema into a Prisma schema.
3. Run prisma generate to generate the Prisma Client. You can then start querying your database.

More information in our documentation:
https://pris.ly/d/getting-started
------->>>>>>

npx prisma migrate dev
// Criar uma migration - colocar o que foi feito desde a ultima migration.
? Enter a name for the new migration: » create table habits

Para visualizar o DB com o prisma
npx prisma studio
- Pode criar entradas no DB pelo prisma studio

CORS - Cross Origin Resource Sharing 
npm i @fastify/cors