## TaskManager

Aplicação desenvolvida para organização de tarefas. App desenvolvido com tela de login para acessar a tarefa utilizando autenticação de token , tela de registro para se cadastrar com email e senha.

<details>
  <summary>
    <strong> 👩‍💻 Backend </strong>
  </summary>

  - Construição de uma _API Node Express_ utilizando o _Typescript_

  - Aplicação de arquitetura _MSC_ (Camada de Controller e Service)

  - Utilização do bando de dados **Postgres** com ORM **Prisma**

  - Criação de endpoints no padrão _REST_

  - Autenticação dos dados com token utilizando _JWT_

  > Documentação: [Clique aqui](https://github.com/Adriana-coderstar/taskManager/blob/main/backend/README.md)

</details>

<details>
  <summary>
    <strong> 👩‍💻 Frontend </strong>
  </summary>

  - Aplicação desenvolvida utilizando _React_ 

  - Requisição api com a biblioteca _Axios_ 

  - Estilização usando a lib _Styled-Components_
  
 > Dcoumentação: [Clique aqui](https://github.com/Adriana-coderstar/taskManager/blob/main/frontend/README.md)

</details>
  

<details>
  <summary>
    <strong> :whale2: Rodando Docker </strong>
  </summary>
  
  1. Clone o repositório
      - `git clone git@github.com:Adriana-coderstar/taskManager.git`
        
  2. Na pasta raíz do projeto no terminal utilizar o comando:
      - `docker-compose up -d --build`
  
  3. Url frontend:
      - ` http://localhost:3000`
   
</details>

<details>
  <summary>
    <strong> ⌨️ Rodando local </strong>
  </summary>
  
      
  1. Necessário ter Node instalado e o banco de dados Postgres
  
  2. Instale as dependências backend
      - cd backend
      - npm install
    
  3. Configurando variável de ambiente:
      - Modificar o arquivo .envExemple para .env

      - Alterar DATABASE_URL="postegres://USER:PASSWORD@HOST:PORT/NAME_DATABASE"

  4. Dentro da pasta backend tem docker-compose.yml para rodar o banco de dados, nele é necessario configurar as environment conforme abaixo:
     -  POSTGRES_USER=`USER`
     -  POSTGRES_PASSWORD=`PASSWORD`
     -  POSTGRES_DB=`NAME_DATABASE`
     
  5. Rodar docker-compose do banco de dados:
     - docker-compose up
     
  6. Em outro terminal na pasta __backend__ rodar aplicação, esse comando automaticamente configura o __Prisma__ e roda as migratios conforme o script no package.json:
     - npm start
     
  7. Instale as dependências frontend:
      - cd frontend
      - npm install
    
  8. Rodar o comando:
      - npm start
    
  10. Url frontend: ` http://localhost:3000`
   
</details>

