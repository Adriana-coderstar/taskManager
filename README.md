## TaskManager

Aplicação desenvolvida para organização de tarefas. App desenvolvido com tela de login para acessar a tarefa utilizando validação de token , tela de registro para se cadastrar com email e senha.

<details>
  <summary>
    <strong> 👩‍💻 Backend </strong>
  </summary><br>

  - Construição de uma _API Node Express_ utilizando o _Typescript_

  - Aplicação de arquitetura _MSC_ (Camada de Controller e Service)

  - Utilização do bando de dados **Postgres** com ORM **Prisma**

  - Criação de endpoints no padrão _REST_

  - Validação dos dados com token utilizando _JWT_

  > Documentação: `Backend:` [Clique aqui](https://github.com/Adriana-coderstar/taskManager/blob/main/backend/README.md)

</details>

<details>
  <summary>
    <strong> 👩‍💻 Frontend </strong>
  </summary><br>

  - Aplicação desenvolvida utilizando _React_ 

  - Requisição api com a biblioteca _Axios_ 

  - Estilização usando a lib _Styled-Components_
  
  Dcoumentação:`Frontend:` [Clique aqui](https://github.com/Adriana-coderstar/taskManager/blob/main/frontend/README.md)

</details>

<details>
  <summary>
    <strong> ⌨️ Clone do repositório </strong>
  </summary><br>
  
  1. Clone o repositório
    - `git clone git@github.com:Adriana-coderstar/taskManager.git`

  2. Instale as dependências backend
    - `cd backend`
    - `npm install`

    - Configurar o Prisma:
    - `npx prisma generate` 
    - `npx prisma migrate dev` 

    - Rodar aplicação:
    - `npm run dev`
    
  3. Instale as dependências frontend
    - `cd frontend`
    - `npm install`
    
 </details>

 <details>
  <summary>
    <strong> ⚠ Configurando variável de ambiente para rodar app local </strong>
  </summary><br>
  
 - Modificar o arquivo `env.example` para `.env`
 
 - Alterar DATABASE_URL="postgres://`USER:PASSWORD`@`HOST`:`PORT`/`NAME_DATABASE`"
 </details>
 

  <details>
  <summary>
    <strong> :whale2: Rodando Docker </strong>
  </summary><br>
  
 - No terminal utilizar o comando `docker-compose up -d`
  </details>

