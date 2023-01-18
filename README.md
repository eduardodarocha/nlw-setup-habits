"# nlw-setup-habits" 


# Next Level Week - Setup Habits
## Projeto desenvolvido durante a Next Level Setup da Rocketseat realizado em junho de 2023.

## Tecnologias utilizadas

- NodeJS
- Fastify (Framework) 
- Typescript
- ORM - Prisma
- CORS - Cross Origin Resource Sharingcd server
- React
- Vite
- Tailwindcss


### Setup Backend - Pasta \server
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
Criar o modelo(model) de dados no arquivo schema.prisma ->
model Habit {
  id         String   @id @default(uuid())
  title      String
  created_at DateTime

  @@map("habits") //cria alias para a tabela
}

npx prisma migrate dev
// Criar uma migration - colocar o que foi feito desde a ultima migration.
? Enter a name for the new migration: » create table habits

Para visualizar o DB com o prisma
npx prisma studio
- Pode criar entradas no DB pelo prisma studio

CORS - Cross Origin Resource Sharing 
npm i @fastify/cors

### Setup Frontend - Pasta \web
npm create vite@latest
-> app name: web
-> framework: React
-> variant: Typescript
cd web
npm install
npm run dev

npm i -D tailwindcss postcss autoprefixer

No arquivo "tailwind.config.cjs" adicionar ->
content: [
    './src/**/*.tsx',
    './index.html'
  ],
npx tailwindcss init -p

### Setup Mobile - Pasta \mobile
Configurar ambiente de desenvolvimento para React Native
https://react-native.rocketseat.dev/

npm install -g expo-cli

criar projeto com expo:
npx create-expo-app mobile --template
cd mobile
npx expo start
npx expo start --clear (para limpar o cache)
Comando "a" para abrir o emulador

Baixar a pasta aula-1 (https://drive.google.com/drive/folders/1lq5kcOCN0tWqrvULu_SkDoMrgy9jpIo-)
ecolocar o conteúdo da pasta assets na pasta assets do projeto e src/assets no raiz do projeto

Customizar fontes do Google Fonts (https://docs.expo.dev/guides/using-custom-fonts/)
npx expo install expo-font @expo-google-fonts/inter
