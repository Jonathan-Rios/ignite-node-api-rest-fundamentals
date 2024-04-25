<h1 align="center">Fundamentals - NodeJS</h1>

<p align="center">
  <img 
    src="https://img.shields.io/badge/NodeJS-21.1.0-blue" 
    alt="NodeJS Ver. 21.1.0"
  />
  <img 
    src="https://img.shields.io/badge/Typescript-5.4.5-blue"
    alt="Typescript Ver. 5.4.5" 
  />
  <img
    src="https://img.shields.io/badge/Ignite-2023-green" 
    alt="Ignite-2023"
  />
  <img 
    alt="License"
    src="https://img.shields.io/static/v1?label=license&message=MIT&color=E51C44&labelColor=0A1033"
  />
</p>

<div align="center">

  ![Last commit](https://img.shields.io/github/last-commit/Jonathan-Rios/ignite-node-api-rest-fundamentals?color=4DA1CD 'Last commit') &nbsp;
  ![Repo size](https://img.shields.io/github/repo-size/Jonathan-Rios/ignite-node-api-rest-fundamentals?color=4DA1CD 'Repo size') &nbsp;
  ![Languages](https://img.shields.io/github/languages/count/Jonathan-Rios/ignite-node-api-rest-fundamentals?color=4DA1CD 'Languages') &nbsp;

</div>
 
<br>

## 💻 Projeto
Descrição do projeto:
Essa aplicação foi desenvolvida para estudos seguindo os ensinamentos da **[Rocketseat](https://www.rocketseat.com.br/)** no curso Ignite **[Ignite](https://www.rocketseat.com.br/ignite)** .
 

O foco da aplicação foi 
* Criação de uma API do zero com NodeJS
* Aprender a utilizar Fastify
* Aprender a utilizar Knex
* Criação de testes com Vitest

## 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Fastify](https://expo.dev/)
- [Knex.js](https://knexjs.org/)
- [Vitest](https://vitest.dev/)
 
 
## 🚀 Como executar

Clone o projeto e acesse a pasta do mesmo.

```bash
$ git clone https://github.com/Jonathan-Rios/ignite-node-api-rest-fundamentals.git

$ cd ignite-node-api-rest-fundamentals
```
 Crie um arquivo .env seguindo a [.env.example](./.env.example) como exemplo.

```bash
# Instalar as dependências
$ npm install

# Iniciar o projeto
$ npm run dev
```

## 📝 License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE.md) para mais detalhes.

<br />


## 📓 Anotações pessoais

<h3>Comandos utilizados</h3>

```bash
  # Criando do zero
  ➜ npm init -y #Inicia dizendo yes para todas as perguntas.
  
  ➜ npm i -D typescript
  ➜ npm i -D @types/node
  ➜ npx tsc --init # Gerar as configurações
  ➜ npm i -D tsx # Permite rodar .ts sem ficar convertendo.

  ➜ npm i fastify
  ➜ npm i @fastify/cookie
  
  ➜ npm i eslint -D         
  ➜ npm i @rocketseat/eslint-config -D
  
  ➜ npm i dotenv
  
  ➜ npm i knex       
  ➜ npm i sqlite3

  ➜ npm i zod

  # Configurado no package.json o script knex permitindo rodar com o tsx.
  # Gerando migration (Migrations Geradas)
  npm run knex -- migrate:make create-transactions
  npm run knex -- migrate:make add-session-id-to-transactions


  # Rodando as migrations
  npm run knex -- migrate:latest
  
  # Caso NÃO tenha enviado ao time, e queria desfazer algo na migrate rodada (do contrário crie uma nova migration com a correção.)
  npm run knex -- migrate:rollback

  npm i vitest -D
  npm i supertest -D 
  npm i @types/supertest -D

  npm i tsup -D
  npm i pg
```

<br />

<a href="https://github.com/Jonathan-Rios">
 <img src="https://github.com/Jonathan-Rios.png" width="100px;" alt="" style="border-radius:50%" />
 <br />
 <sub><b>Jonathan Rios Sousa</b></sub></a>

💠 NeverStopLearning 💠
 

[![Linkedin Badge](https://img.shields.io/badge/-Jonathan-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jonathan-rios-sousa-19b3431b6/)](https://www.linkedin.com/in/jonathan-rios-sousa-19b3431b6/) 
[![Gmail Badge](https://img.shields.io/badge/-jonathan.riosousa@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:jonathan.riosousa@gmail.com)](mailto:jonathan.riosousa@gmail.com)