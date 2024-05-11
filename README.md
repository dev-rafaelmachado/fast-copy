# Fast Copy

![GitHub repo size](https://img.shields.io/github/repo-size/dev-rafaelmachado/fast-copy?style=for-the-badge)

## 🚀 Sobre o projeto

O Fast Copy é um projeto que visa facilitar a cópia de textos/informações entre 2 ou mais dispositivos, sem a necessidade de instalar aplicativos ou extensões. Nele você pode copiar um texto em um dispositivo entrar em uma sala e registrar o texto copiado, e em outro dispositivo acessar a mesma sala e colar o texto copiado. As salas também possuem senha para garantir a privacidade dos textos copiados.

[![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://pt-br.reactjs.org/)
[![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![VSCODE](https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)
[![ESLINT](https://img.shields.io/badge/ESLINT-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)](https://prettier.io/)
[![FIREBASE](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)

## Requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

## Instalação

```bash
$ git clone https://github.com/dev-rafaelmachado/fast-copy
$ cd fast-copy
$ yarn
```

## Executando o projeto

```bash
$ yarn dev
```

## Variáveis de ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`NEXT_PUBLIC_FIREBASE_API_KEY` - Chave da API do Firebase
`NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` - Domínio de autenticação do Firebase
`NEXT_PUBLIC_FIREBASE_DATABASE_URL` - URL do banco de dados do Firebase
`NEXT_PUBLIC_FIREBASE_PROJECT_ID` - ID do projeto do Firebase
`NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` - Bucket do Firebase
`NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` - ID do remetente de mensagens do Firebase
`NEXT_PUBLIC_FIREBASE_APP_ID` - ID do aplicativo do Firebase
`NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID` - ID de medição do Firebase
`NEXT_PUBLIC_SECRET` - Chave secreta para criptografia


## TODO

- [ ] Adicionar testes
- [ ] Adicionar regras de segurança no Firebase
- [ ] Melhorar os secrets do Firebase

## Autores

- [@dev-rafaelmachado](https://github.com/dev-rafaelmachado)

