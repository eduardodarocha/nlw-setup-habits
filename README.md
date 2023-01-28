"# nlw-setup-habits" 


# Next Level Week - Setup Habits
## Projeto desenvolvido durante a Next Level Setup da Rocketseat realizado em junho de 2023.

## Tecnologias utilizadas

- NodeJS - Backend
- Fastify (Framework) - Ferramenta para criar API's
- Typescript
- Prisma - ORM - Object Relational Mapping
- CORS - Cross Origin Resource Sharingcd server
- React - Frontend
- Vite - Ferramenta de build
- Tailwindcss - Framework CSS
- React Native - Mobile
- Prisma Entity Relationship Diagram Generator (prisma-erd-generator)
- Expo - Ferramenta para desenvolvimento mobile
- zod - Validador de dados
- dayjs - Manipulação de datas (https://day.js.org/)
- phosphor-react - Icones
- Nativewind - Framework CSS para React Native
- radix-ui - Low-level UI component library with a focus on accessibility (https://www.radix-ui.com/)
- clsx - A tiny (228B) utility for constructing `className` strings conditionally
- reactnavigation - Navegação entre telas (https://reactnavigation.org/)
- react-native-reanimated - React Native's Animated library reimplemented (https://docs.swmansion.com/react-native-reanimated/)
- web-push - Web Push library for Node.js
- expo-notifications - Expo Notifications API (https://docs.expo.io/versions/latest/sdk/notifications/)


### Setup Backend - Pasta \server

Aula-1

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
---------------------------------------------

Aula-2

Create new model in schema.prisma ->
HabitWeekDays, Day e DayHabit
npx prisma migrate dev  //new migration
npx prisma studio //visualizar o DB

created relationship between Habit and HabitWeekDays
npx prisma migrate dev

Utilizar Prisma Entity Relationship Diagram Generator (prisma-erd-generator) 
para gerar o diagrama de relacionamento entre as tabelas
https://www.npmjs.com/package/prisma-erd-generator

npm i -D prisma-erd-generator @mermaid-js/mermaid-cli

Add to your schema.prisma:
generator erd {
  provider = "prisma-erd-generator"
}

Run the generator:
npx prisma generate

cria um ERD.svg na pasta prisma
-------
Criar seeds para popular o DB
criar arquivo na pasta prisma com o nome seed.ts
e colocar o conteúdo do arquivo seed.ts da pasta aula-2 (https://efficient-sloth-d85.notion.site/Materiais-Aula-2-eb53491dfb0c45d88e7a9ecc8c5026f8) 

acrescentar as linhas abaixo no arquivo package.json:

"prisma": {
    "seed": "tsx prisma/seed.ts"
  }

npx prisma db seed
------

npm i zod
npm i dayjs
----------------------------
Aula-3
Criação das rotas day, habit toggle e summary
--------------------------------------------------------------------------------
### Setup Frontend - Pasta \web
npm create vite@latest
-> app name: web
-> framework: React
-> variant: Typescript
cd web
npm install
npm run dev
(npm run dev -- --host) -> para expor o projeto para outros dispositivos na mesma rede

npm i -D tailwindcss postcss autoprefixer

No arquivo "tailwind.config.cjs" adicionar ->
content: [
    './src/**/*.tsx',
    './index.html'
  ],
npx tailwindcss init -p
---------------------------------------

Aula-2

npm i phosphor-react

---------------------------------------
Aula 3
npm install @radix-ui/react-dialog

npm install @radix-ui/react-popover

npm install @radix-ui/react-checkbox

npm i clsx

Aula 4

npm i axios


--------------------------------------------------------------------------------

### Setup Mobile - Pasta \mobile

Aula-1 

Configurar ambiente de desenvolvimento para React Native
https://react-native.rocketseat.dev/

npm install -g expo-cli

criar projeto com expo:
npx create-expo-app mobile --template
cd mobile
npx expo start
npx expo start --clear (para limpar o cache)
Comando "a" para abrir o emulador

Baixar a pasta aula-1
 (https://drive.google.com/drive/folders/1lq5kcOCN0tWqrvULu_SkDoMrgy9jpIo-)
ecolocar o conteúdo da pasta assets na pasta assets do projeto e 
src/assets no raiz do projeto

Customizar fontes do Google Fonts 
(https://docs.expo.dev/guides/using-custom-fonts/)
npx expo install expo-font @expo-google-fonts/inter

Aula-2

Nativewind -  https://www.nativewind.dev/

npm i nativewind
npm i tailwindcss --save-dev

npx tailwindcss init
configurar o arquivo tailwind.config.js
adicionar ao babel.config.js -> plugins: ["nativewind/babel"],

npx expo install react-native-svg  //instalar dependencia para usar svg

react-native-svg-transformer (https://github.com/kristerkari/react-native-svg-transformer)
npm install react-native-svg-transformer --save-dev
configurar o metro.config.js e Using typescript

importar @expo/vector-icons no Header.tsx
(oblador.github.io/react-native-vector-icons/)

Install dayjs
npm i dayjs
configurar dayjs para pt-br criando pasta lib/dayjs.ts

Aula - 3

npm install @react-navigation/native 
npx expo install react-native-screens react-native-safe-area-context 
npm install @react-navigation/native-stack //estratégia de navegação para mobile - stack

Aula - 4

npm i axios

no arquivo /lib/axios.ts adicionar baseURL: 'http://endereco-ip-seu-computador:3333' e não localhost
(com ip do meu computador não funcionou, tive que usar o http://10.0.2.2:3333) para android studio.

Aula - 5

npx expo install react-native-reanimated

adicionar ao babel.config.js -> plugins: ["react-native-reanimated/plugin"]


--------------------------------------------------------------------------------

Next level Web:
- Autenticação:
fairebase
Auth0
Login social (conta Google, Facebook, Github)

- Notificação push:
Mobile ->  expo-notifications
Web - Service Workers
- Perfil publico do usuário com gráficos de progresso/resumo(sem acesso aos hábitos)
-------------------------------------------------------------------------------------

Aula Extra - Push Notifications
Dentro da pasta server:
npm i web-push
npm i @types/web-push -D
-----

Aula Extra - Mobile
npx expo install expo-notifications
